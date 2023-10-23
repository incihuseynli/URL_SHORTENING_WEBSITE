// import React from 'react'
import { useState } from "react";
import logo from "../assets/images/logo.svg";

const SmNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="smMenu">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <i onClick={() => setIsOpen(!isOpen)} className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      {isOpen && (
        <ul className="navMenu">
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
          <hr className="line" />
          <button className="btn-text">Login</button>
          <button className="btn-primary">Sign Up</button>
        </ul>
      )}
    </div>
  );
};

export default SmNavbar;
