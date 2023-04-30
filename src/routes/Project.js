import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeroImage from '../components/HeroImage/HeroImage';
import Work from '../components/WorkCard/Work';
import PricingCard from '../components/PricingCard/PricingCard';

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="PROJECTS." text="Some of my recent works" />
      <Work />
      {/* <PricingCard /> */}
      <Footer />
    </div>
  )
}

export default Project;