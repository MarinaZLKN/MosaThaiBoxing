import React from 'react';
import logo from '@images/mosa.jpeg';


interface LogoProps {
  alt: string;

}

const Hero: React.FC<LogoProps> = ({ alt }) => {
  return (
    <div className="logo">
      <img src={logo} alt={alt} />
    </div>
  );
};

export default Hero;