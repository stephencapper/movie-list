import React from 'react';
import { useState } from 'react';

const Search = (props) => {
  const [searchError, setSearchError] = useState(false);
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    let searchQuery = event.target.children.searchQuery.value;
    if (searchQuery.length === 0) {
      props.setCurrentMovies(props.moviesData);
      setSearchError(false);
      return;
    }
    let outputMovies = [];
    for (let movie of props.moviesData) {
      if (movie.title.indexOf(searchQuery) !== -1) {
        outputMovies.push(movie);
      }
    }
    if(outputMovies.length === 0) {
      props.setCurrentMovies(props.moviesData);
      setSearchError(true);
      return;
    }
    props.setCurrentMovies(outputMovies);
    setSearchError(false);
  };
  return (
    <>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" name="searchQuery" placeholder="Search..."/>
        <button type="submit">Go!</button>
      </form>
      {searchError ? <div>No movie by that name found, all movies are displayed</div> : null}
    </>
  );
};

export default Search;