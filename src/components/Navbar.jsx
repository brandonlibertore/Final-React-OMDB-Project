import React from "react";
import { Link } from "react-router-dom";
import PersonalLogo from "../assets/B_Monogram.png";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="row__nav">
        <figure className="logo__img--wrapper">
          <img src={PersonalLogo} alt="Logo" className="logo__img" />
        </figure>
        <ul className="nav__link--list">
          <Link to="/" className="nav__link--wrapper">
            <li className="nav__link">Home</li>
          </Link>
          <Link to="/" className="nav__link--wrapper">
            <li className="nav__link">Find Your Movie</li>
          </Link>
          <li
            className="nav__link no-cursor"
            onClick={() => alert("The Feature Has Not Been Implemented")}
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
