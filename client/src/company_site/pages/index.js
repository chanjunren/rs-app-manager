import React, { useState } from 'react';

import NavBar from '../components/navbar';
import SideBar from '../components/sidebar';
import HeroSection from '../components/hero_section';
import AppsSection from '../components/app_section';
import Footer from '../components/footer';
// import AboutSection from '../components/about_section';
import ProductsSection from '../components/products_section';
import GallerySection from '../components/gallery_section';
// import PressSection from '../components/press_section';
import { withTheme } from '../../util/theme';
import ContactUsSection from '../components/contact_us_section';
import PartnerProductSection from '../components/partner_product_section';
import NewProductSection from '../components/new_product_section';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      {/* <ProductsSection />
      <PartnerProductSection /> */} {/*Old design where the product section is clickable cards and partner product seperated*/}
      <NewProductSection/> {/*New design where the products are combined and shown in grid*/}
      <GallerySection />
      <AppsSection />
      <ContactUsSection />
      <Footer />
    </React.Fragment>
  );
};

export default withTheme(Home);
