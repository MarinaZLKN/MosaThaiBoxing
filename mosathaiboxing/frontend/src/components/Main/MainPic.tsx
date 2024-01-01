import React from 'react';
import '../../styles/MainPic.scss';
import mainpic from '@images/main.png';

interface MainPicProps {
    alt: string;
}

const ImageView: React.FC<MainPicProps> = ({alt}) => (
    <div className="image-container">
        <img src={mainpic} alt={alt} className="main_picture"/>
    </div>
);

export default ImageView;