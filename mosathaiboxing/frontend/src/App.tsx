import * as React from 'react';
import './styles/App.css';
import  Header  from './components/Header'
import Hero from "./components/Main/Section1/Hero";



const App: React.FC = () => {
    return (
        <div className="main-page">
            <header>
                <Header/>
            </header>
            <main>
                <section>
                    <Hero alt="Hero"/>
                </section>


            </main>
            <footer>
            </footer>
        </div>
    );
};

export default App;

