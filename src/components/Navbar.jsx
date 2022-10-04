import React from "react";
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
          <li className="nav__link">Home</li>
          <li className="nav__link">Find Your Movie</li>
          <li className="nav__link">Contact</li>
        </ul>
      </div>
    </div>
  );
}
