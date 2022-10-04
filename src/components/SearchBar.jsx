import React, { useState, useEffect } from "react";
import axios from "axios";
import Selector from "./Selector";
import Movie from "./Movie";
import "./SearchBar.css";

// ICONS
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function searchMovie() {
    setLoading(true);
    if (query !== "") {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=60806666&s=${query}`
      );
      if (data.Response !== "False") {
        setMovies(data.Search);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <nav className="searchBar">
      <div className="column__search">
        <h1>Browse Our Movies</h1>
        <div
          className="input__container"
          onKeyPress={(event) => {
            event.key === "Enter" && searchMovie();
          }}
        >
          <input
            type="text"
            className="input__movies"
            placeholder="Search by Title or Keyword"
            onChange={(event) => {
              event.preventDefault();
              setQuery(event.target.value);
            }}
          />
          <SearchIcon />
        </div>
      </div>
      <Selector />
      <div className="movies">
        {loading
          ? new Array(6).fill(0).map(() => (
              <div className="movie__skeleton">
                <figure className="poster__skeleton"></figure>
                <div className="left__align__skeleton">
                  <h3 className="movie__title__skeleton"></h3>
                  <h3 className="movie__year__skeleton"></h3>
                  <h3 className="movie__type__skeleton"></h3>
                </div>
              </div>
            ))
          : movies
              .map((movie) => (
                <Movie
                  key={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  movieType={movie.Type}
                  poster={movie.Poster}
                />
              ))
              .slice(0, 6)}
      </div>
    </nav>
  );
}
