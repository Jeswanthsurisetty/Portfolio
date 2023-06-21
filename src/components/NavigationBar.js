import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <nav>
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/" className="navigation-link">Home</Link>
        </li>
        <li className="navigation-item">
          <Link to="/about" className="navigation-link">About</Link>
        </li>
        <li className="navigation-item">
          <Link to="/projects" className="navigation-link">Projects</Link>
        </li>
        <li className="navigation-item">
          <Link to="/contact" className="navigation-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
