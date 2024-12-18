import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <a href='/myprofile'>My Profile</a>
        </li>
        <li>
          <a href='/recipe'>Sighting</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
