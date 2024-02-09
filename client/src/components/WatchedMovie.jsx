import React from 'react';

const WatchedMovie = (props) => {
  const watchedClickHandler = (event) => {
    let movieWatched = event.target.value === 'watched' ? 'toWatch' : 'watched';
    let movieTitle = props.movie.title;
    let moviesData = props.moviesData.slice(0);
    for (let movie of moviesData) {
      if (movie.title === movieTitle) {
        movie.watched = movieWatched;
        break;
      }
    }
    props.setMoviesData(moviesData);
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
      {props.movie.watched === 'watched' ? <button value="watched" onClick={watchedClickHandler}>Watched</button> : null}
      {props.movie.watched === 'toWatch' ? <button value="toWatch" onClick={watchedClickHandler}>To watch</button> : null}
    </>
  );
};

export default WatchedMovie;