import React from 'react';
import './HomePage.css';


const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p> Hi! I am Jeswanth Sai and This is my Portfolio.</p>
        <p>I am Full Stack Developer</p>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;

