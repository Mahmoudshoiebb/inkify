import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Inkify</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li className="cart-icon">
            <Link to="/cart">
              <img src="/cart.png" alt="Shopping Cart" width="30" height="30" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
