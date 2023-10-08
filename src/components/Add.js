import { React, useState, useEffect } from "react";
import "./Add.css";
import ResultCard from "./ResultCard";
import axios from "axios";
const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=534b35e3`)
      .then((response) => {
        if (response.data.Search) {
          setMovies(response.data.Search);
        }
      })
      .catch((error) => console.log(error));
  }, [searchValue]);
  
  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-container">
            <input
              type="text"
              placeholder="search for a movie"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {movies.length > 0 && (
              <ul className="results">
                {movies.map((movie) => (
                  <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
