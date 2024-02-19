import React from 'react';
import Hero from './Main/Section1/Hero';
import Section2 from './Main/Section2/Section2';
import WhyMuayThai from './Main/Section3/WhyMuayThai';
import Section4 from './Main/Section4/Section4';
import TrainingList from './Main/Section5/TrainingList';
import Schedule from './Main/Section6/Schedule';
import TrainerList from './Main/Section7/TrainerList';
import Section8 from './Main/Section8/Section8';
import Contacts from './Main/Section9/Contacts';
import Header from "./Header";
import Footer from "./Footer";


const Main: React.FC = () => {

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };
    return (<>
            <header>
                <Header scrollToSection={scrollToSection}/>
            </header>
            <main>
                <section>
                    <Hero alt="Hero"/>
                </section>
                <section>
                    <Section2/>
                </section>
                <section id="about">
                    <WhyMuayThai/>
                </section>
                <section id="programs">
                    <Section4/>
                </section>
                <section id="prices">
                    <TrainingList/>
                </section>
                <section id="schedule">
                    <Schedule/>
                </section>
                <section id="coaches">
                    <TrainerList/>
                </section>
                <section>
                    <Section8/>
                </section>
                <section id="contact">
                    <Contacts/>
                </section>

            </main>
            <footer>
                <Footer/>
            </footer>
        </>

    );
};

export default Main;
