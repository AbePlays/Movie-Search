import React from "react";

function SearchMovies() {
  return (
    <form className="form">
      <label htmlFor="query" className="label">
        Movie Name
      </label>
      <input
        type="text"
        name="query"
        placeholder="Enter name of movie"
        className="input"
      />
      <button type="submit" className="button">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
