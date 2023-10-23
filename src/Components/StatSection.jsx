// import React from 'react'

import Cards from "./Cards";

const StatSection = () => {
  return (
    <section className="StatSection">
      <h1 className="title">Advanced Statistics</h1>
      <p className="info text">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <Cards />
    </section>
  );
};

export default StatSection;
