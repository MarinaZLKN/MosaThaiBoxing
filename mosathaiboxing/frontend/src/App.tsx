import * as React from 'react';
import './styles/App.css';
import  Header  from './components/Header'
import Main from './components/Main'
import Hero from "./components/Main/Section1/Hero";
import WhyMuayThai from "./components/Main/Section3/WhyMuayThai";
import Section4 from "./components/Main/Section4/Section4";
import Section2 from "./components/Main/Section2/Section2";
import Schedule from "./components/Main/Section6/Schedule";
import TrainingList from "./components/Main/Section5/TrainingList";
import Footer from './components/Footer'
import TrainReg from "./components/TrainReg";
import TrainerList from "./components/Main/Section7/TrainerList";
import Section8 from "./components/Main/Section8/Section8";
import Contacts from "./components/Main/Section9/Contacts";
import { Routes, Route } from "react-router-dom";


const App: React.FC = () => {



    return (
        <div className="container">
            {/*<header>*/}
            {/*    <Header scrollToSection={scrollToSection}/>*/}
            {/*</header>*/}
            <main>
                <Routes>
                    <Route path="/register" element={<TrainReg/>} />
                    <Route path="/" element={<Main/>} />
                </Routes>
                {/*<section>*/}
                {/*    <Hero alt="Hero"/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <Section2/>*/}
                {/*</section>*/}
                {/*<section id="about">*/}
                {/*    <WhyMuayThai/>*/}
                {/*</section>*/}
                {/*<section id="programs">*/}
                {/*    <Section4/>*/}

                {/*</section>*/}
                {/*<section id="prices">*/}
                {/*    <TrainingList/>*/}
                {/*</section>*/}
                {/*<section id="schedule">*/}
                {/*    <Schedule/>*/}
                {/*</section>*/}
                {/*<section id="coaches">*/}
                {/*    <TrainerList/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <Section8/>*/}
                {/*</section>*/}
                {/*<section>*/}
                {/*    <Contacts/>*/}
                {/*</section>*/}


            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default App;

