import React, { useState } from 'react';


interface FormData {
    name: string;
    email: string;
    phone_number: string;
    text: string;
}

const FeedbackForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone_number: '',
        text: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <form >
                <label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <input
                        type="tel"
                        name="phone_number"
                        placeholder="Phone number"
                        value={formData.phone_number}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    <textarea
                        name="text"
                        placeholder="Notice"
                        value={formData.text}
                        onChange={handleChange}
                        rows={4}
                        cols={50}
                        required
                    />
                </label>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
