import React from "react";
import "./SearchBar.css";

// ICONS
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className="searchBar">
      <div className="column__search">
        <h1>Browse Our Movies</h1>
        <div className="input__container">
          <input
            type="text"
            className="input__movies"
            placeholder="Search by Title or Keyword"
          />
          <SearchIcon />
        </div>
      </div>
    </div>
  );
}
