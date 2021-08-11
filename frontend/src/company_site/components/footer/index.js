import React from 'react';

import './footer.css';
import { Link as LinkS } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer id="footer-container">
      <div id="footer-wrapper">
        <div id="footer-links-container">
          <div className="footer-links-wrapper">
            <div className="footer-link-items">
              <h1 className="footer-link-title">Robosolutions</h1>
              <LinkS
                className="footer-link"
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About
              </LinkS>
              <LinkS className="footer-link" to="products">
                Products
              </LinkS>
              <LinkS className="footer-link" to="gallery">
                Gallery
              </LinkS>
              <LinkS className="footer-link" to="apps">
                Applications
              </LinkS>
              <LinkS className="footer-link" to="press">
                Press
              </LinkS>
              <LinkS className="footer-link" to="contactUs">
                Contact Us
              </LinkS>
            </div>
            <div className="footer-link-items">
              <h1 className="footer-link-title">Temi</h1>
              <a
                className="footer-link"
                href="https://www.instagram.com/roadtomagician/"
              >
                Official Website{' '}
              </a>
            </div>
          </div>
        </div>
        <section id="social-media">
          <div id="social-media-wrap">
            <LinkS to="/" id="social-logo">
              Robosolutions
            </LinkS>
            <small id="website-rights">
              Robosolutions © {new Date().getFullYear()} All Rights Reserved
            </small>
            <div id="social-icons">
              <a
                className="social-icon-link"
                href="https://www.facebook.com/Temirobosolutions"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                className="social-icon-link"
                href="https://www.instagram.com/temi_singapore/"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                className="social-icon-link"
                href="https://www.linkedin.com/in/wenchyi-lim-a228637/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
