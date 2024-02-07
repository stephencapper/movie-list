import React from 'react';
import MovieTitle from './MovieTitle.jsx';

const MovieList = (props) => {
  console.log('props movies data :', props.moviesData);
  return (
    <div>
      <h2>Movie Title</h2>
      {props.moviesData.map((movie) => {
        return (<MovieTitle movie={movie}/>);
      } )}
    </div>
  );
};

export default MovieList;