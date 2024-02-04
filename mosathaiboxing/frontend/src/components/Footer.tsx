import React from 'react';
import footer from '@images/footer.png'
import '../styles/Footer.css'
import Logo from './Logo';
import fb from '@images/icon-facebook.png'
import ig from '@images/icon-instagram.png'


const Footer: React.FC = () => {
  return (
    <div className="container footer-container">
      <img src={footer} alt="footer" className="footer_background"/>
        <div className="footer-content">
            <div className="footer-title">
            Follow us on social media <br/>for the exact dates and to stay updated!
        </div>
        <Logo alt="footer logo" className="footer-logo"/>
        <div className="footer-social">
            <img className="footer-social_logo" src={fb}/>
            <img className="footer-social_logo" src={ig}/>
        </div>
        </div>

    </div>
  );
};

export default Footer;
