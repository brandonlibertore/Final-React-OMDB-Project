import React from "react";
import "./Movie.css";

export default function Movie({ title, year, movieType, poster }) {
  return (
    <div className="movie">
      <figure className="poster">
        <img className="poster__img" src={poster} alt="" />
      </figure>
      <div className="left__align">
        <h3 className="movie__title">{title}</h3>
        <h3 className="movie__year">{year}</h3>
        <h3 className="movie__type">{movieType}</h3>
      </div>
    </div>
  );
}
