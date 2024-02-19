import React from 'react';

const ToggleWatchedDisplay = (props) => {
  const handleToggleClick = (event) => {
    let newDisplay = event.target.value;
    props.setWatchedDisplay(newDisplay);
    if (newDisplay === 'AllMovies') {
      props.setCurrentMovies(props.moviesData);
    } else {
      let newCurrentMovies = [];
      for (let movie of props.moviesData) {
        if ((newDisplay === 'watched' && movie.watched) || (newDisplay === 'toWatch' && !movie.watched)) {
          newCurrentMovies.push(movie);
        }
      }
      props.setCurrentMovies(newCurrentMovies);
    }
  };
  let [allMoviesStyle, watchedStyle, toWatchStyle] = [{backgroundColor: '#FBCEB1'}, {backgroundColor: '#FBCEB1'}, {backgroundColor: '#FBCEB1'}];
  if (props.watchedDisplay === 'AllMovies') {
    allMoviesStyle = {backgroundColor: '#90EE90'};
  } else if (props.watchedDisplay === 'watched') {
    watchedStyle = {backgroundColor: '#90EE90'};
  } else {
    toWatchStyle  = {backgroundColor: '#90EE90'};
  }
  return (
    <>
      <button value="AllMovies" style={allMoviesStyle} onClick={handleToggleClick}>All Movies</button>
      <button value="watched" style={watchedStyle} onClick={handleToggleClick}>Watched</button>
      <button value="toWatch" style={toWatchStyle} onClick={handleToggleClick}>To watch</button>
    </>
  );
};

export default ToggleWatchedDisplay;

// const ToggleWatchedDisplay = (props) => {
//   const handleToggleClick = (event) => {
//     let newDisplay = event.target.value;
//     props.setWatchedDisplay(newDisplay);
//     if (newDisplay === 'allMovies') {
//       props.setCurrentMovies(props.moviesData);
//     } else {
//       let newCurrentMovies = [];
//       for (let movie of props.moviesData) {
//         if (newDisplay === movie.watched) {
//           newCurrentMovies.push(movie);
//         }
//       }
//       props.setCurrentMovies(newCurrentMovies);
//     }
//   };
//   let [allMoviesStyle, watchedStyle, toWatchStyle] = [{backgroundColor: '#FBCEB1'}, {backgroundColor: '#FBCEB1'}. {backgroundColor: '#FBCEB1'}];
//   if (props.watchedDisplay === 'allMovies') {
//     allMoviesStyle = {backgroundColor: '#90EE90'};
//   } else if (props.watchedDisplay === 'watched') {
//     watchedStyle = {backgroundColor: '#90EE90'};
//   } else {
//     toWatchStyle  = {backgroundColor: '#90EE90'};
//   }
//   return (
//     <>
//       <button value="allMovies" style={allMoviesStyle} onClick={handleToggleClick}>All Movies</button>
//       <button value="watched" style={watchedStyle} onClick={handleToggleClick}>Watched</button>
//       <button value="toWatch" style={toWatchStyle} onClick={handleToggleClick}>To watch</button>
//     </>
//   );
// };