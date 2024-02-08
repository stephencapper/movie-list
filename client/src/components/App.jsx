import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import { useState } from 'react';

const App = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [currentMovies, setCurrentMovies] = useState(moviesData);
  return (
    <>
      <AddMovie
        setMoviesData={setMoviesData}
        moviesData={moviesData}
        setCurrentMovies={setCurrentMovies}
      />
      <Search
        setCurrentMovies={setCurrentMovies}
        moviesData={moviesData}
      />
      <MovieList currentMovies={currentMovies}/>
    </>
  )
};

export default App;