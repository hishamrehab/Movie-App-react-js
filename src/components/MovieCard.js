import React from "react";
import MovieControlls from "./MovieControlls";
import "./MovieCard.css";
const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieControlls movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
