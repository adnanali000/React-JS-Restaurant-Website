import React from 'react';
import {FooterOverlay,Newsletter} from '../../components'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import './Footer.css';
import {images} from '../../constants'

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter />
  
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Address: Lorem ipsum dolor sit amet.</p>
        <p className="p__opensans">09876543210</p>
        <p className="p__opensans">01234567899</p>
      </div>
      <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footerLogo" />
          <p className="p__opensans">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam voluptatum ea."</p>
          <img src={images.spoon} alt="footerSpoon"  style={{marginTop:15}}/>
          <div className="app__footer-links_icons">
              <FiFacebook />
              <FiInstagram />  
              <FiTwitter />  
          </div>     
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
