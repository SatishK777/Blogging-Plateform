import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Add more links if needed */}
      </ul>
    </nav>
  );
};

export default NavigationBar;
