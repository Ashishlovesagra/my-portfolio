import React from 'react';
import { Link } from 'react-router-dom';
import './NavLink.css';

function NavbarLink() {
  return (
    <>
    <div className="navbar-link">
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    <li><Link to='/education'>Education</Link></li>
    <li><Link to='/about'>About me</Link></li>
    <li><Link to='/certificte'>Certificate</Link></li>
    <li><Link to='/projects'>Project</Link></li>
    </div>
    </>
  )
}

export default NavbarLink;
