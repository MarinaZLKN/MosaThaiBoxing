import React from 'react';
import Logo from './Logo';
import '../styles/Header.scss';

interface HeaderProps {
    scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({scrollToSection}) => {
    return (
        <div className="container header-container">
                <div className="header-logo">
                     <Logo alt="Header logo" className="logo-main"/>
                </div>
                <div className="header-menu">
                    <div className="header-menu-main" onClick={() => scrollToSection('about')}>About</div>
                    <div className="header-menu-main" onClick={() => scrollToSection('programs')}>Programs</div>
                    <div className="header-menu-main" onClick={() => scrollToSection('prices')}>Prices</div>
                    <div className="header-menu-main" onClick={() => scrollToSection('schedule')}>Schedule</div>
                    <div className="header-menu-main" onClick={() => scrollToSection('coaches')}>Coaches</div>
                    <div className="header-menu-main">News</div>
                    <div className="header-menu-main">Merch</div>
                    <div className="header-menu-main">Contact</div>
                </div>
                <div className="registration-button">
                    <button className="header-btn">Register</button>
                </div>

            </div>

    );
};

export default Header;