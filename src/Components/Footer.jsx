// import React from 'react'
import logo from '../assets/images/logo_white.svg'
import FooterMenu from "./FooterMenu";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <img src={logo}  alt="" />
      </div>

      <FooterMenu />
    </footer>
  );
};

export default Footer;
