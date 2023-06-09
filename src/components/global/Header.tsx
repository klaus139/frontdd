import React from 'react';
//import Search from './Search';
import Menu from './Menu';
import { Link } from 'react-router-dom';
//import Toolbar from './Toolbar';

const Header = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
     
      <Link className="navbar-brand" to="/">
      <span style={{ fontSize: '1.5rem', color: 'brown', fontWeight: 'bold' }}>Olean Project</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        {/* <Search /> */}
        <Menu />
      </div>
    </nav>
  );
};

export default Header;
