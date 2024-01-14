import React from 'react';
import '../../../styles/WhyMuayThai.scss';
import wmt from '@images/whymuaythai.png';
const WhyMuayThai: React.FC = () => {

    return (
        <div className="container wmt-container">
            <div className="wmt-picture-block">
                <img src={wmt} alt="Why Muay Thai" />
            </div>
            <div className="wmt-info-block">
                <h2 className="wmy-title">Why Muay Thai</h2>
                <div className="wmt-text">
                    Muay Thai, known as Thai boxing, provides a multitude of physical benefits. It serves as a comprehensive full-body workout that extensively engages the arms, legs, and core, ensuring a well-rounded exercise regimen.<br/><br/>
                    The intensity of Muay Thai training significantly enhances cardiovascular conditioning, boosting heart health and endurance. <br/><br/>
                    For those looking to lose weight and tone their muscles, Muay Thai is an effective method, burning calories and building muscle simultaneously. It also sharpens coordination and agility, essential for the quick movements and reactions required in the sport.<br/><br/>
                    Beyond physical fitness, Muay Thai teaches effective striking techniques, making it a practical skill for self-defense.
                </div>

            </div>
        </div>
    )
}

export default WhyMuayThai;


