import "./AboutContent.css";

import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../../assets/react1.jpg';
import React2 from '../../assets/react2.webp';

const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>
                    I'm a javascript fullstack developer.
                    I have created lot of website as you can
                    show in our projects page as well as my github profile.
                </p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>
            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true" />
                    </div>
                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;