import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style/Navbar.css";
import bglessLogo from "../assets/LOGO-removebg-preview.png";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/"><img src={bglessLogo} className="logo-nav"/></Link>
      </div>

      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        ☰
      </label>

      <ul className="navbar-links">
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={location.pathname === "/events" ? "active" : ""}>
          <Link to="/events">Events</Link>
        </li>
        <li className={location.pathname === "/training-plans" ? "active" : ""}>
          <Link to="/training-plans">Training-Plans</Link>
        </li>
        <li className={location.pathname === "/coaches" ? "active" : ""}>
          <Link to="/coaches">Coaches</Link>
        </li>
        <li className={location.pathname === "/court-booking" ? "active" : ""}>
          <Link to="/court-booking">Book-Court </Link>
        </li>
        <li className={location.pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;