import React from "react";
import "./Selector.css";

// ICONS
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Selector() {
  function filterMovies(event) {}
  return (
    <div className="selector">
      <div className="row__selector">
        <h2 className="search__results--title">Search Results:</h2>
        <div className="arrow__container">
          <figure className="arrow__left--wrapper">
            <ArrowBackIcon className="arrow__left" />
          </figure>
          <figure className="arrow__right--wrapper">
            <ArrowForwardIcon className="arrow__right" />
          </figure>
        </div>
        <select
          id="filter"
          onChange={(event) => filterMovies(event.target.value)}
        >
          <option value="">Sort</option>
          <option value="ASC_ALP">Alphabetically</option>
          <option value="DESC_ALP">Reverse Alphabetically</option>
          <option value="ASC_YEAR">Year</option>
          <option value="DESC_YEAR">Reverse Year</option>
        </select>
      </div>
    </div>
  );
}
