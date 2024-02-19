import React from 'react';

const WatchedMovie = (props) => {
  const watchedClickHandler = (event) => {
    let movieWatched = event.target.value === 'watched' ? false : true;
    let movieTitle = props.movie.title;
    let moviesData = props.moviesData.slice(0);
    for (let movie of moviesData) {
      if (movie.title === movieTitle) {
        movie.watched = movieWatched;
        props.setUpdateMovie(movie);
        break;
      }
    }
    if (props.watchedDisplay === 'AllMovies') {
      props.setCurrentMovies(moviesData);
    } else {
      let currentMovies = props.currentMovies.slice(0);
      for (let i = 0; i < currentMovies.length; i++) {
        if ((currentMovies[i]).title === movieTitle) {
          for (let j = i; j < currentMovies.length - 1; j++) {
            currentMovies[j] = currentMovies[j + 1];
          }
          currentMovies.pop();
          break;
        }
      }
      props.setCurrentMovies(currentMovies);
    }
  };
  return (
    <>
      {props.movie.watched ? <button value="watched" onClick={watchedClickHandler}>Watched</button> : <button value="toWatch" onClick={watchedClickHandler}>To watch</button>}
    </>
  );
};

export default WatchedMovie;