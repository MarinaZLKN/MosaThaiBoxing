import React from 'react';
import Logo from './Logo';
import '../styles/Header.scss';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="container header-container">
                <div className="header-logo">
                     <Logo alt="Header logo" className="logo-main"/>
                </div>
                <div className="header-menu">
                    <div className="header-menu-main">About</div>
                    <div className="header-menu-main">Programs</div>
                    <div className="header-menu-main">Prices & Schedule</div>
                    <div className="header-menu-main">Coaches</div>
                    <div className="header-menu-main">News</div>
                    <div className="header-menu-main">Merch</div>
                    <div className="header-menu-main">Contact</div>
                </div>
                <div className="registration-button">
                    <button>Register</button>
                </div>

            </div>

    );
};

export default Header;