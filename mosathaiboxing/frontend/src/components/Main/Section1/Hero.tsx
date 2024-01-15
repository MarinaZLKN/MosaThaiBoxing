import React from 'react';
import logo from '@images/mosaMain.png';
import '../../../styles/Hero.scss';


interface LogoProps {
  alt: string;

}

const Hero: React.FC<LogoProps> = ({ alt }) => {
  return (
    <div className="hero">
      <img src={logo} alt={alt} className="hero-image"/>
        <div className="image-title">
            <div className="main-page_pic-title"> Muay Thai</div>
            <div className="main-page_pic-subtitle"> Empower your spirit, unleash your strength <br/>Muay Thai – more than a martial art, it's a way of life</div>
            <button id="main-page-pic-btn">Join Us</button>
        </div>
    </div>
  );
};

export default Hero;