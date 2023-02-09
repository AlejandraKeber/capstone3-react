import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitcoin } from '@fortawesome/free-brands-svg-icons';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="flex">
      <div className="nav-title flex">
        <FontAwesomeIcon icon={faBitcoin} size="2x" />
        <h1>Crypto Metrics</h1>
      </div>
      <ul className="flex">
        <li>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="link"
            to="/about"
            style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
