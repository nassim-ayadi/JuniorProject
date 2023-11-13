import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/book-meeting">Book Meeting</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
