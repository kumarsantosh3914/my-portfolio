import "./HeroImage.css";
import React from 'react'
import IntroImg from '../../assets/intro-bg.jpg';
import { Link } from "react-router-dom";

const HeroImage = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="" />
            </div>
            <div className="content">
                <p>HI, I'M A FREELANCER.</p>
                <h1>Javascript Developer.</h1>
                <div className="pro-btns btns">
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage;