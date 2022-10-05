import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonalLogo from "../assets/B_Monogram.png";
import "./Navbar.css";

// ICONS
import Brightness1TwoToneIcon from "@mui/icons-material/Brightness1TwoTone";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  function toggleContrast() {
    console.log("CLICKED");
    setToggle(!toggle);
    if (toggle) {
      document.body.classList += " white-theme";
    } else {
      document.body.classList.remove("white-theme");
    }
  }

  return (
    <div className="navbar">
      <div className="row__nav">
        <Link to="/">
          <figure className="logo__img--wrapper">
            <img src={PersonalLogo} alt="Logo" className="logo__img" />
          </figure>
        </Link>
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
          <li className="nav__link theme">
            <Brightness1TwoToneIcon
              onClick={() => toggleContrast()}
              className="toggle"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
