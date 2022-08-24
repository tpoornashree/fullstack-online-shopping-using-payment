


import React from 'react';
import { BsYoutube, BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <div className="footer-container">
     <p>2022 Poornahree All rights reserved</p>
     <p className="icons">
    <div>
      <a href="https://www.instagram.com/codeliketheresnotomorrow/" >
       <BsInstagram />
      </a>
    </div> 
    <div>
    <a href="https://www.linkedin.com/in/poornashree-thirumalai-6b1b19220/" target="_blank" rel="noreferrer">
      <BsLinkedin />
      </a>
    </div>
    <div>
    <a href= "https://www.youtube.com/channel/UCqVcyTRTo_lMkfKCIa3L5HQ" target="_blank" rel="noreferrer">
    <BsYoutube  />
      </a>
    </div>
    <div>
    <a href="https://github.com/tpoornashree" target="_blank" rel="noreferrer">
    <BsGithub  />
      </a>
    </div> </p>
  </div>
);

export default Footer;

