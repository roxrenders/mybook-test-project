import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3 m-0">
      <Link to="/" className="navbar-brand text-white">MYBOOKS</Link>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/newpage" className="nav-link text-white">New Page</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
