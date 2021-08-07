import React, {useState} from 'react';

import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/hero_section';
import InfoSection from '../components/info_section';
import AppsSection from '../components/app_section';
import {
  aboutSectionObj,
  contactUsSectionObj,
  gallerySectionObj,
} from '../components/info_section/data';
import Footer from '../components/footer';
import AboutSection from '../components/about_section';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle}/>
      <SideBar isOpen={isOpen} toggle={toggle}/>
      <HeroSection/>
      <AboutSection/>
      <InfoSection {...gallerySectionObj}/>
      <AppsSection/>
      <InfoSection {...contactUsSectionObj}/>
      <Footer/>
    </React.Fragment>
  );
};

export default Home;
