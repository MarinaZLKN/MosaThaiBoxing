import React, {useState} from 'react';
import './../styles/TrainReg.scss';
import trainreg from '@images/img.png';
import close from '@images/img_1.png';
import {Link} from "react-router-dom";
import Footer from "./Footer";

interface TrainingRegistration {
  name: string;
  age: number;
  phone_number: string;
  email: string;
  parent_name: string;
  level: string;
}

const TrainReg: React.FC = () => {
  const [formData, setFormData] = useState<TrainingRegistration>({
    name: '',
    age: 0,
    phone_number: '',
    email: '',
    parent_name: '',
    level: 'beginner'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // send data to server here
    console.log(formData);
    // Сброс данных формы
    setFormData({
      name: '',
      age: 0,
      phone_number: '',
      email: '',
      parent_name: '',
      level: 'beginner'
    });
  };

  return (
      <>
        <div className="container train_reg-container">
          <div className="train-pic">
            <img src={trainreg} className="train_reg-img"/>
            <Link to="/">
              <img src={close} className="train_reg-close"/>
            </Link>
          </div>
          <div className="train-reg-wrapper">
            <label className="train-reg-title">Start your <label id="train-reg-title-yellow">journey</label></label>
            <form className="train-reg-form" onSubmit={handleSubmit}>
              <div>
                <label className="train-reg-lab">Name</label>
                <input className="input-train-reg" type="text" name="name" value={formData.name} onChange={handleChange}
                       required/>
              </div>
              <div>
                <label className="train-reg-lab">Age</label>
                <input className="input-train-reg" type="number" name="age" value={formData.age} onChange={handleChange}
                       required/>
              </div>
              <div>
                <label className="train-reg-lab">Phone Number</label>
                <input className="input-train-reg" type="tel" name="phone_number" value={formData.phone_number}
                       onChange={handleChange} required/>
              </div>
              <div>
                <label className="train-reg-lab">Email</label>
                <input className="input-train-reg" type="email" name="email" value={formData.email}
                       onChange={handleChange} required/>
              </div>
              <div>
                <label className="train-reg-lab">Parent Name</label>
                <input className="input-train-reg" type="text" name="parent_name" value={formData.parent_name}
                       onChange={handleChange} required/>
              </div>
              <div>
                <label className="train-reg-lab">Level</label>
                <select className="input-train-reg" name="level" value={formData.level} onChange={handleChange}>
                  <option value="advanced">Advanced</option>
                  <option value="beginner">Beginner</option>
                  <option value="child">Child</option>
                  <option value="basic-course">Basic Course</option>
                </select>
              </div>
              <button id="train-reg_btn" type="submit">Join us</button>
            </form>
          </div>
        </div>
        <footer>
          <Footer/>
        </footer>
      </>

  );
};

export default TrainReg;
