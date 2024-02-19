import React from 'react';
import '../../../styles/NewsFeed.scss';
import News from "./News";
import Title from "../../Title";
import Footer from "../../Footer";

const Section8: React.FC = () => {

    return (
        <div className="container section8-container">
            <Title text="Latest news" size="large" color="var(--White)" lineHeight="120px"/>
            <News />
        </div>
    )
}

export default Section8;