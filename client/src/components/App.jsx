import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
//import ToggleWatchedDisplay from './ToggleWatchedDisplay.jsx';
import { useState } from 'react';

const App = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentMovies, setCurrentMovies] = useState(moviesData);
  const [watchedDisplay, setWatchedDisplay] = useState('AllMovies');
  return (
    <>
      <h1>Movie List</h1>
      <AddMovie
        setMoviesData={setMoviesData}
        moviesData={moviesData}
        setCurrentMovies={setCurrentMovies}
        setWatchedDisplay={setWatchedDisplay}
      />
      <Search
        setCurrentMovies={setCurrentMovies}
        moviesData={moviesData}
        setWatchedDisplay={setWatchedDisplay}
      />
      {/* <ToggleWatchedDisplay
        moviesData={moviesData}
        setCurrentMovies={setCurrentMovies}
        setWatchedDisplay={setWatchedDisplay}
        watchedDisplay={watchedDisplay}
      /> */}
      <MovieList
        currentMovies={currentMovies}
        moviesData={moviesData}
        setMoviesData={setMoviesData}
        setCurrentMovies={setCurrentMovies}
        watchedDisplay={watchedDisplay}
      />
    </>
  )
};

export default App;