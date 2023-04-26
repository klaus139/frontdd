import React from 'react';
import bannerImg from '../../constants';
import './banner.css';

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImg} alt="Main banner" className="banner-img" />
      <div className="banner-content">
        {/* <p className="banner-text">Olean Project</p> */}
        <p className="banner-para">Get Your Project materials, Research Materials and E-Books</p>
        <div className="banner-div">
          <h1>Project Topics, Project Thesis, Edu Materials and lots more</h1>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
