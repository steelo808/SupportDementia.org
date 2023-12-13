import React from "react"
import Logo from '../components/Images/SupportDementiaLogo.png';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav>
    <Link to="/"><img src ={Logo} className="logo" /></Link>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;







