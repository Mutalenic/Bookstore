import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h1>BookStore</h1>
  <nav className="navbar">
    <ul>
      <li>
        <Link className="navbar-link" to="/">Books</Link>
      </li>
      <li>
        <Link className="navbar-link" to="/categories">Categories</Link>
      </li>     
    </ul>
  </nav>
  </div>
);

export default Navbar;