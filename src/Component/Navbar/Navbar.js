import React from 'react';
import NavbarLink from './NavbarLink/NavbarLink';
import './Style.css';

function Navbar() {
  return (
    <>
    <div className="navbar-main">
    <div className="navbarlogo-main">
        <div className="logo"></div>
    </div>
    <div className="navbarlink">
    <NavbarLink/>
    </div>
    </div>
    </>
  )
}

export default Navbar;
