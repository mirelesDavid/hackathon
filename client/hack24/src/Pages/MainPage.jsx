import React from 'react';
import NavBar from '../Components/NavBar';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-container">
      <NavBar />
      <div className="content">
        <div className="body-container">
          <div className="hero-section">
            <h1>Examine the Potential of Genius's AI Chatting</h1>
            <p>
              At Genius, we believe in the power of artificial intelligence to transform the way you work and create. Our platform offers a suite of advanced AI tools designed to revolutionize your writing, coding, and media creation processes.
            </p>
            <div className="button-container">
              <button className="cta-button">Get Started</button>
              <button className="cta-button secondary-button">Watch Video</button>
            </div>
          </div>
        </div>
        {/* Nueva sección de logos */}
        <div className="logos-section">
          <h2>Featured On</h2>
          <div className="logos-container">
            <img src="/path-to-logo1.png" alt="Company 1" className="company-logo" />
            <img src="/path-to-logo2.png" alt="Company 2" className="company-logo" />
            <img src="/path-to-logo3.png" alt="Company 3" className="company-logo" />
            <img src="/path-to-logo4.png" alt="Company 4" className="company-logo" />
          </div>
        </div>
        {/* Nueva sección con imagen y texto explicativo */}
        <div className="analytics-section">
          <div className="analytics-content">
            <img src="/path-to-analytics-image.png" alt="Analytics Image" className="analytics-image" />
            <div className="analytics-text">
              <h3>Built-In Analytics To Track Your NFTs</h3>
              <p>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
              <button className="cta-button analytics-button">View Our Pricing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
