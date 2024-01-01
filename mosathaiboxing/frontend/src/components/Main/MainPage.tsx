import React, {Fragment} from 'react';
import MainPic from "./MainPic";
import Logo from '../Logo';
import '../../styles/MainPage.css';
import Title from "../Title";
import FeedbackForm from "./FeedbackForm";

const MainPage: React.FC = () => {
    const handleSubmit = (formData: FormData) => {
        console.log('Данные из формы:', formData);

    };
    return (
        <div className="container main-page_container">
            <div className="main-page_pic">
                <MainPic alt="Main page picture"/>
            </div>
            <div className="main-page_aboutUs">
                <div className="aboutUs-info">
                    <div className="aboutUs-title">
                        <Title text="About us"/>
                    </div>
                    <div className="subtitle">
                        Sports club MMAces was founded in Pärnu in 2010, when it was the third sports club in Estonia
                        that trains freestyle combat, or MMA. Sports club MMAces is a member of the Estonian Sports
                        Freestyle Wrestling Association (ESVL) and cooperates with other Estonian sports clubs that
                        train freestyle sports. <br/> <br/>Today, we have grown into a family sports club that offers training for
                        children, youth and adults, both men and women.
                    </div>
                </div>
                <div className="aboutUs-logo">
                    <Logo alt="About Us Logo" className="aboutUs-logo"/>
                </div>
            </div>
            <div className="main-page-groups">
                <div className="main-page-groups-title">
                    <Title text="Groups"/>
                </div>
            </div>
            <div className="main-page_mt-block">
                <div className="main-page_mt-block">
                    <Title text="Why muay thai?"/>
                    <div className="main-page_mt-block_text">
                        <div className="subtitle">Muay Thai, known as Thai boxing, provides a multitude of <label className="highlight">physical</label> benefits.
                            It's a holistic full-body workout that significantly improves
                            cardiovascular health, enhancing endurance and heart fitness. The practice increases
                            strength, particularly in the legs, back, and shoulders, and improves flexibility and
                            coordination. This high-intensity training also aids in effective weight management and
                            muscle toning. Additionally, Muay Thai equips practitioners with practical self-defense
                            skills.</div>
                        <div className="subtitle">
                            <br/>
                            On the <label className="highlight">mental</label> side, Muay Thai serves as a potent stress buster, promoting resilience and
                            mental toughness. The discipline and focus required in training sharpen these cognitive
                            skills, beneficial in various life situations. Practitioners often notice an uplift in
                            self-confidence as they progress, bolstered by physical improvement and self-defense
                            proficiency. The practice encourages mindfulness and present moment awareness, contributing
                            to overall mental well-being. Engaging in Muay Thai also allows individuals to connect with
                            its rich cultural heritage, adding a deeper layer of appreciation. The social aspect of
                            joining a Muay Thai community fosters camaraderie and support, enhancing the overall
                            experience.
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-page_info">
                <div className="main-page_form">
                    <Title text="Write to us"/>
                    <FeedbackForm />
                </div>
            </div>
            <div className="main-page_contacts"></div>
            <div className="main-page_sponsors"></div>
            <h1>Main Page</h1>

        </div>
    );
};

export default MainPage;