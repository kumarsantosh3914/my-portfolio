import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage/HeroImage';
import AboutContent from '../components/AboutContent/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="ABOUT" text="Im a FullStack Developer." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About;