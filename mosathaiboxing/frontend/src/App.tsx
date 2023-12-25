import React from 'react';
import './styles/App.css';
import  Header  from './components/Header'

const App: React.FC = () => {
  return (
      <div className="container">
        <header>
            <Header />
        </header>
        <main>
          <div>Mosa Thai Boxing</div>

        </main>
        <footer>
        </footer>
      </div>
  );
};

export default App;

