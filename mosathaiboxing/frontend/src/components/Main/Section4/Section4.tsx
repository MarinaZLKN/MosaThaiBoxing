import React from 'react';
import '../../../styles/Accordion.scss';
import Accordion from "./Accordion";
import sec4 from '@images/prg.png';

const Section4: React.FC = () => {

    return (
        <div className="container section4-container">
            <img src={sec4} alt="section4 picture" className="section4-picture"/>

        </div>
    )
}

export default Section4;