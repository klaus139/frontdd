import React from 'react';
import bannerImg from '../../constants';
import './banner.css';

const Banner = () => {

  const mainFeaturedPost = {
    title: "Olean Project",
    description:
      "Find What You Want",
    image: 'https://source.unsplash.com/random/?library',
    imageText: 'Welcome to the World of Research',
    //linkText: 'Continue reading…',
  };

  return (
    <div className="banner-container">
      <img className="banner-img" src={mainFeaturedPost.image} alt="banner" />
      <div className="banner-content">
        <h1 className="banner-text">{mainFeaturedPost.title}</h1>
        <p className="banner-para">{mainFeaturedPost.description}</p>
      </div>
    </div>
  );
};

export default Banner;
