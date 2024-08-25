import React from 'react';
import '../../src/style/banner.css';

const HomeBanner = () => {
  return (
    <div className="home-banner">
      <div className="banner-content">
        <h1>Welcome to SK Blog Bytes</h1>
        <p>Your daily dose of insightful blogs on technology, programming, and more.</p>
        <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}>
          Explore Blogs
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
