import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const location = useLocation();

  const getActiveClass = (path) => {
    return (location.pathname === path) ? 'active' : '';
  };

  return (
    <div className="header">
      <ul>
        <li className={getActiveClass('/')}>
          <Link to="/">Home</Link>
        </li>
        <li className={getActiveClass('/projects')}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={getActiveClass('/contact')}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
