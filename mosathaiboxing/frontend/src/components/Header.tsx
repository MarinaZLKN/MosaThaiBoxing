import React from 'react';
import Logo from './Logo';
import '../styles/Header.scss';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="container header-container">
                <div className="header-logo">
                     <Logo alt="Logo" className="logo-main"/>
                </div>

            </div>

    );
};

export default Header;