import React from 'react';
import {images} from '../../constants'
import './Header.css';
import {SubHeading} from '../../components'

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
          <SubHeading title="Chase the new flavour" />
          <h1 className="app__header-h1">The Key to Fine Dining</h1>
          <p className="p__opensans" style={{margin:'2rem 0'}}>
            Gericht Restaurant has been successfully owned and operated since 1990 and welcomes you to drop by and join the locals in our fun and friendly atmosphere.
          </p>
          <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
          <img src={images.welcome} alt="welcome-Image" />
      </div>
  </div>
);

export default Header;
