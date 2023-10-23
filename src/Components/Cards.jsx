// import React from 'react'
import brandIcon from "../assets/images/icon-brand-recognition.svg";
import detailIcon from "../assets/images/icon-detailed-records.svg";
import fullyIcon from "../assets/images/icon-fully-customizable.svg";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <div className="icon">
          <img src={brandIcon} alt="" />
        </div>
        <h4 className="subtitle">Brand Recognition</h4>
        <p className="text">
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </p>
        <hr className="line" />
      </div>
      <div className="card">
        <div className="icon">
          <img src={detailIcon} alt="" />
        </div>
        <h4 className="subtitle"> Detailed Records</h4>
        <p className="text">
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </p>
        <hr className="line" />
      </div>
      <div className="card">
        <div className="icon">
          <img src={fullyIcon} alt="" />
        </div>
        <h4 className="subtitle">Fully Customizable</h4>
        <p className="text">
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </p>
      </div>
    </div>
  );
};

export default Cards;
