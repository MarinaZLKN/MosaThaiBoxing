import React from 'react';
import arrow from '@images/arrow-up.png';

interface CustomNextButtonProps {
  onClick: () => void;
}

const CustomNextButton: React.FC<CustomNextButtonProps> = ({ onClick }) => (
  <div className="custom-next-button" onClick={onClick}>
    <img id="next-btn" className="wmt_btn" src={arrow} alt="arrow" />
  </div>
);

export default CustomNextButton;
