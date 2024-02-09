import React from 'react';
import MovieTitle from './MovieTitle.jsx';
import WatchedMovie from './WatchedMovie.jsx';

const MovieList = (props) => {
  return (
    <div>
      {props.currentMovies.map((movie) => {
        return (
        <>
          <div>
            <MovieTitle movie={movie}/>
            <WatchedMovie
              movie={movie}
              currentMovies={props.currentMovies}
              moviesData={props.moviesData}
              setMoviesData={props.setMoviesData}
              setCurrentMovies={props.setCurrentMovies}
              watchedDisplay={props.watchedDisplay}
            />
          </div>
        </>
        );
      } )}
    </div>
  );
};

export default MovieList;