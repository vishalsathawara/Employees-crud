import React from 'react';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__col">
            <h6 className="footer__title">About Us</h6>
            <p className="footer__text">
              My name is Vishal Sathawara and I am the creator of Simple Employee Data management website.In this we can Add ,Delete, Remove, and Upadate any data and also in we can scan QR code for additional information And that conected with firebase realtime database .If you have any questions or feedback, don't hesitate to reach out
            </p>
          </div>
          <div className="footer__col">
            <h6 className="footer__title">Contact Us</h6>
            <p className="footer__text">Email: sathawaravishal10@gmail.com</p>
            <p className="footer__text">Phone: +91 7698556219</p>
          </div>
          <div className="footer__col">
            <h6 className="footer__title">Follow Us</h6>
            <p className="footer__text">
              <a className="footer__link" href="https://www.linkedin.com/in/sathawara-vishal-1b2859194" target="_blank">
                <LinkedInIcon fontSize="large" />
              </a>
              <a className="footer__link" href="mailto:sathawaravishal10@gmail.com" target="_blank">
                <MailIcon fontSize="large" />
              </a>
              <a className="footer__link" href="https://wa.me/+919978391497" target="_blank">
                <WhatsAppIcon fontSize="large" />
              </a>
              <a className="footer__link" href="https://www.instagram.com/vishal_sathawara_2001" target="_blank">
                <InstagramIcon fontSize="large" />
              </a>
            </p>
          </div>
        </div>
        <p className="footer__copyright">
          Copyright &copy; 2023 Vishal Sathawara. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
