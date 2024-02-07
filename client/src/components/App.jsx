import React from 'react';
import MovieList from './MovieList.jsx';
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
  return (
    <MovieList moviesData={moviesData}/>
  )
};

export default App;