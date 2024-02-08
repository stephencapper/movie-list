import React from 'react';
import MovieTitle from './MovieTitle.jsx';

const MovieList = (props) => {
  return (
    <div>
      <h2>Movie List</h2>
      {props.currentMovies.map((movie) => {
        return (<MovieTitle movie={movie}/>);
      } )}
    </div>
  );
};

export default MovieList;