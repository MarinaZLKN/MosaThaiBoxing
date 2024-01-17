import * as React from 'react';
import './styles/App.css';
import  Header  from './components/Header'
import Hero from "./components/Main/Section1/Hero";
import Decoration from "./components/Main/Section1/Decoration";
import WhyMuayThai from "./components/Main/Section3/WhyMuayThai";
import Section4 from "./components/Main/Section4/Section4";




const App: React.FC = () => {
    return (
        <div className="container">
            <header>
                <Header/>
            </header>
            <main>
                <section>
                    <Hero alt="Hero"/>
                    <Decoration/>
                </section>
                <section>
                    <WhyMuayThai/>
                </section>
                <section>
                    <Section4 />
                </section>


            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;

