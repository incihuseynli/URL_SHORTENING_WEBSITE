// import React from 'react'
import heroImg from '../assets/images/illustration-working.svg';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className="info">
        <h1 className="heading">More than just shorter links</h1>
        <p className="text">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="image">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
};

export default HeroSection;
