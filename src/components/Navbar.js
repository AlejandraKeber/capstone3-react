import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="flex">
      <div>
        <h1>Capstone</h1>
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
