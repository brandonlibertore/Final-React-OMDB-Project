import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import "./MovieInfo.css";

export default function MovieInfo() {
  const [movie, setMovie] = useState([]);
  let { id } = useParams();

  async function grabMovie() {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=60806666&i=${id}`
    );
    console.log(data);
    setMovie(data);
  }

  useEffect(() => {
    grabMovie();
  }, []);

  return (
    <>
      <Navbar />
      <div className="movieInfo">
        <div className="row__movieInfo">
          <figure className="poster__img--wrapper">
            <img src={movie.Poster} alt="N/A" className="poster__img" />
          </figure>
          <div className="movie__info--container">
            <h1 className="movie__info--title">{movie.Title}</h1>
            <h2 className="movie__info--actors">Featuring: {movie.Actors}</h2>
            <div className="summary__container">
              <p className="movie__info--summary">Summary</p>
              <p className="movie__info--plot">{movie.Plot}</p>
              <p className="movie__info--genre">Genre: {movie.Genre}</p>
              <p className="movie__info--directors">
                Director: {movie.Director}
              </p>
              <p className="movie__info--writers">Author: {movie.Writer}.</p>

              <p className="movie__info--about">
                Rated: {movie.Rated} <br></br> Release: {movie.Released}{" "}
                <br></br> Runtime: {movie.Runtime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
