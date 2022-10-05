import React, { useState } from "react";
import { Link } from "react-router-dom";
import PersonalLogo from "../assets/B_Monogram.png";
import "./Navbar.css";

// ICONS
import Brightness1TwoToneIcon from "@mui/icons-material/Brightness1TwoTone";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
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
        <MenuIcon className="small__devices" onClick={() => openMenu()} />
        <div class="menu__backdrop">
          <CloseIcon
            className="btn__menu btn__menu--close no-cursor"
            onClick={() => closeMenu()}
          />
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={() => closeMenu()}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={() => closeMenu()}>
                Find Your Movie
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link no-cursor">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
