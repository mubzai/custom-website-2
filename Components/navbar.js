import React from 'react';


const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-content">
        <div  href="/" className="navbar-logo">Mubashir Website</div>
        <ul className="navbar-links">
          <li><a href="/" className="navbar-link">Home</a></li>
          <li><a href="/About" className="navbar-link">About</a></li>
          <li><a href="/Contact" className="navbar-link">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
