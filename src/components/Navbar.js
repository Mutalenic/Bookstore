import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="topNav">
    <h1 id="bookStoreTitle">BookStore CMS</h1>
    <nav className="navbar">
      <ul className="bookMenuNav">
        <li>
          <Link className="navbar-link-book" to="/">Books</Link>
        </li>
        <li>
          <Link className="navbar-link" to="/categories">Categories</Link>
        </li>
      </ul>
      <img src="https://img.icons8.com/external-anggara-outline-color-anggara-putra/32/000000/external-avatar-interface-anggara-outline-color-anggara-putra.png" alt="profile" />

    </nav>
  </div>
);

export default Navbar;
