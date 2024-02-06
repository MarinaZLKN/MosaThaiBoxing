import * as React from 'react';
import './styles/App.css';
import  Header  from './components/Header'
import Hero from "./components/Main/Section1/Hero";
import Decoration from "./components/Main/Section1/Decoration";
import WhyMuayThai from "./components/Main/Section3/WhyMuayThai";
import Section4 from "./components/Main/Section4/Section4";
import Section2 from "./components/Main/Section2/Section2";
import Schedule from "./components/Main/Section6/Schedule";
import TrainingList from "./components/Main/Section5/TrainingList";
import Footer from './components/Footer'
import InfiniteMarquee from "./components/Main/Section2/InfiniteMarquee";
import TrainerList from "./components/Main/Section7/TrainerList";
import Section8 from "./components/Main/Section8/Section8";
import Contacts from "./components/Main/Section9/Contacts";


const App: React.FC = () => {

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div className="container">
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
                <section>
                    <Contacts/>
                </section>


            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default App;

