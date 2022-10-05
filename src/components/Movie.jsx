import React from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

export default function Movie({ id, title, year, movieType, poster }) {
  return (
    <>
      {poster !== "N/A" ? (
        <Link to={`/${id}`} className="movie">
          <div>
            <figure className="poster">
              {<img className="poster__img" src={poster} alt="" />}
            </figure>
            <div className="left__align">
              <h3 className="movie__title">{title}</h3>
              <h3 className="movie__year">{year}</h3>
              <h3 className="movie__type">{movieType}</h3>
            </div>
          </div>
        </Link>
      ) : (
        <div
          className="movie__empty"
          onClick={() => alert("The Feature Has Not Been Implemented")}
        >
          <figure className="poster__empty">
            {<img className="poster__img--empty" src={poster} alt="N/A" />}
          </figure>
          <div className="left__align">
            <h3 className="movie__title">{title}</h3>
            <h3 className="movie__year">{year}</h3>
            <h3 className="movie__type">{movieType}</h3>
          </div>
        </div>
      )}
    </>
  );
}
