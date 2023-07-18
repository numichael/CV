import React from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Michael</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <Link to="services" smooth={true} spy={true}>
              <li>Services</li>
            </Link>
            <Link to="experience" smooth={true} spy={true}>
              <li>Experience</li>
            </Link>
            <Link to="portfolio" smooth={true} spy={true}>
              <li>Portfolio</li>
            </Link>
            <Link to="testimonial" smooth={true} spy={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
