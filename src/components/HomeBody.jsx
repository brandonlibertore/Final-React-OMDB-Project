import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import HomePageImg from "../assets/undraw_horror_movie_3988.svg";
import "./HomeBody.css";

// ICONS
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [moviesSlice, setMoviesSlice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  async function searchMovie() {
    setLoading(true);
    if (query !== "") {
      const { data } = await axios.get(
        `https://omdbapi.com/?apikey=60806666&s=${query}`
      );
      if (data.Response !== "False") {
        filterMovies(data.Search);
      }
    } else {
      setMovies([]);
    }
    setLoading(false);
  }

  function filterMovies(data) {
    if (filter == "ASC_ALP") {
      setMovies(data.sort((a, b) => (a.Title > b.Title ? 1 : -1)));
      setMoviesSlice(data.sort((a, b) => (a.Title > b.Title ? 1 : -1)));
    } else if (filter == "DESC_ALP") {
      setMovies(data.sort((a, b) => (a.Title > b.Title ? -1 : 1)));
      setMoviesSlice(data.sort((a, b) => (a.Title > b.Title ? -1 : 1)));
    } else if (filter == "ASC_YEAR") {
      setMovies(data.sort((a, b) => (a.Year > b.Year ? 1 : -1)));
      setMoviesSlice(data.sort((a, b) => (a.Year > b.Year ? 1 : -1)));
    } else if (filter == "DESC_YEAR") {
      setMovies(data.sort((a, b) => (a.Year > b.Year ? -1 : 1)));
      setMoviesSlice(data.sort((a, b) => (a.Year > b.Year ? -1 : 1)));
    } else {
      setMovies(data);
      setMoviesSlice(data);
    }
  }

  useEffect(() => {
    searchMovie();
  }, [filter]);

  useEffect(() => {}, [moviesSlice]);

  function changePageLeft() {
    if (currentPage > 1) {
      setMoviesSlice(movies);
      const nextPage = currentPage;
      setCurrentPage(currentPage - 1);
      const startIndex = currentPage == 1 ? 0 * 6 : currentPage * 6;
      const EndIndex = currentPage == 1 ? 1 * 6 : nextPage * 6;
      if (moviesSlice.slice(startIndex, EndIndex).length > 0) {
        setMoviesSlice(movies.slice(startIndex, EndIndex));
      }
    }
  }

  function changePageRight() {
    if (currentPage >= 1) {
      const lastPage = currentPage;
      const startIndex = lastPage * 6;
      const EndIndex = (currentPage + 1) * 6;
      if (movies.slice(startIndex, EndIndex).length > 0) {
        setMoviesSlice(movies.slice(startIndex, EndIndex));
        setCurrentPage(currentPage + 1);
      }
    }
  }

  return (
    <div className="homeBody">
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
      <div className="selector">
        <div className="row__selector">
          <h2 className="search__results--title">Search Results:</h2>
          <div className="arrow__container">
            <figure className="arrow__left--wrapper">
              <ArrowBackIcon
                className="arrow__left"
                onClick={() => changePageLeft()}
              />
            </figure>
            <figure className="arrow__right--wrapper">
              <ArrowForwardIcon
                className="arrow__right"
                onClick={() => changePageRight()}
              />
            </figure>
          </div>
          <select
            id="filter"
            onChange={(event) => setFilter(event.target.value)}
            defaultValue={""}
          >
            <option value="" disabled>
              Sort
            </option>
            <option value="ASC_ALP">Alphabetically</option>
            <option value="DESC_ALP">Reverse Alphabetically</option>
            <option value="ASC_YEAR">Oldest</option>
            <option value="DESC_YEAR">Newest</option>
          </select>
        </div>
      </div>
      <div className="movies">
        {movies.length === 0 ? (
          <img src={HomePageImg} />
        ) : loading ? (
          new Array(6).fill(0).map((_, index) => (
            <div className="movie__skeleton" key={index}>
              <figure className="poster__skeleton"></figure>
              <div className="left__align__skeleton">
                <h3 className="movie__title__skeleton"></h3>
                <h3 className="movie__year__skeleton"></h3>
                <h3 className="movie__type__skeleton"></h3>
              </div>
            </div>
          ))
        ) : (
          moviesSlice
            .map((movie) => (
              <Movie
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                movieType={movie.Type}
                poster={movie.Poster}
              />
            ))
            .slice(0, 6)
        )}
      </div>
    </div>
  );
}
