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




const App: React.FC = () => {
    return (
        <div className="container">
            <header>
                <Header/>
            </header>
            <main>
                <section>
                    <Hero alt="Hero"/>
                </section>
                <section>
                    <Section2/>
                </section>
                <section>
                    <WhyMuayThai/>
                </section>
                <section>
                    <Section4 />
                    <TrainingList/>
                </section>
                <section>
                    <Schedule />
                </section>
                <section>
                    <TrainerList/>
                    {/*<InfiniteMarquee/>*/}
                </section>


            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default App;

