import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import { useState } from 'react';

const App = () => {
  const exampleMovieData = [
    { title: 'Mean Girls' },
    { title: 'Hackers' },
    { title: 'The Grey' },
    { title: 'Sunshine' },
    { title: 'Ex Machina' }
  ];
  const [moviesData, setMoviesData] = useState(exampleMovieData);
  const [currentMovies, setCurrentMovies] = useState(moviesData);
  return (
    <>
      <Search
        setCurrentMovies={setCurrentMovies}
        moviesData={moviesData}
      />
      <MovieList currentMovies={currentMovies}/>
    </>
  )
};

export default App;