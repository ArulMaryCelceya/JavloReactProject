import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">JAVLO</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Collection</a>
        <a href="#about">Philosophy</a>
        <a href="#about">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
