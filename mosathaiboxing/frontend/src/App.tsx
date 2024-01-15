import * as React from 'react';
import './styles/App.css';
import  Header  from './components/Header'
import Hero from "./components/Main/Section1/Hero";
import RunningRow from "./components/Main/Section1/RunningRow";
import Decoration from "./components/Main/Section1/Decoration";
import WhyMuayThai from "./components/Main/Section3/WhyMuayThai";



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


            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;

