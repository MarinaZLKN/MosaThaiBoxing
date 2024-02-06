import React, { useEffect, useState } from 'react';
import axios from 'axios';
import contacts_pic from '@images/contacts-pic.png';
import '../../../styles/Contacts.scss'
import Title from "../../Title";
import InfiniteMarquee from "../Section2/InfiniteMarquee";


interface Contact {
    id: number;
    company_name: string;
    address: string;
    phone_number1: string;
    phone_number2: string;
    account_number: string;
    email: string;
    registration_number: string;
}

const Contacts: React.FC = () => {
    const [contact, setContact] = useState<Contact | null>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        text: '',
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/v1/contacts/')
            .then((response) => {
                const data = response.data;
                if (Array.isArray(data) && data.length > 0) {
                    setContact(data[0]);
                }
            })
            .catch((error) => console.error('Error fetching data', error));
    }, []);

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/v1/feedbacks/', formData)
            .then((response) => {
                console.log('Data sent to server', response.data);
                setFormData({ name: '', email: '', phone_number: '', text: '' });
            })
            .catch((error) => {
                console.error('error sending data', error);
            });
    };

    return (
        <div className="container contacts-container">
            <img src={contacts_pic} className="contacts-picture"/>
            <div className="contacts-row">
                 <InfiniteMarquee/>
            </div>
            <div className="contacts-wrapper">
                <Title text="Contact us" size="large" color="var(--White)" lineHeight="120px"/>
                <form className="contacts-form" onSubmit={handleFormSubmit}>
                    <label className="contacts-lab">Name*</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <label className="contacts-lab">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <label className="contacts-lab">Phone number*</label>
                    <input
                        type="text"
                        value={formData.phone_number}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    />
                    <label className="contacts-lab">Message</label>
                    <textarea
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                    <button type="submit">Contact us</button>
                </form>
                {contact && (
                    <div>
                        <h1>{contact.company_name}</h1>
                        <p>Адрес: {contact.address}</p>
                        <p>Телефон 1: {contact.phone_number1}</p>
                        <p>Телефон 2: {contact.phone_number2}</p>
                        <p>Номер счета: {contact.account_number}</p>
                        <p>Email: {contact.email}</p>
                        <p>{contact.registration_number}</p>
                    </div>
                )}
            </div>



        </div>
    );
};

export default Contacts;
