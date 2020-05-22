import React, { useState } from "react";

function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6458ca648b70d6d3d574f8e0b2ce817d&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = res.json();
      setMovies(data.results);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <form className="form" onSubmit={searchMovies}>
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        name="query"
        placeholder="Enter name of movie"
        className="input"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
