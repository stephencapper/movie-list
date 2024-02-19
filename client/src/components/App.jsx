import React from 'react';
import Axios from 'axios';

import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovie from './AddMovie.jsx';
import ToggleWatchedDisplay from './ToggleWatchedDisplay.jsx';

import { useState } from 'react';
import { useEffect } from 'react';

const axiosInstance = Axios.create({
  baseURL: 'http://127.0.0.1:3000'
});

const App = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [watchedDisplay, setWatchedDisplay] = useState('AllMovies');
  const [newMovie, setNewMovie] = useState(null);
  const [updateMovie, setUpdateMovie] = useState(null);
  const [currentMovies, setCurrentMovies] = useState(moviesData);

  useEffect( () => {
    const postNewMovie = axiosInstance.post('/movies', newMovie)
      .then((response) => {
        console.log('Success, movie posted');
      }).catch((error) => {
        if (error.response) {
          console.log('Server error: ', error.response.status);
        } else {
          console.log('Error: no response from server');
        }
      });
      return;
  }, [newMovie]);

  useEffect( () => {
    const postUpdateMovie = axiosInstance.post('/movies', updateMovie)
      .then((response) => {
        console.log('Success, movie updated');
      }).catch((error) => {
        if (error.response) {
          console.log('Server error: ', error.response.status);
        } else {
          console.log('Error: no response from server');
        }
      });
      return;
  }, [updateMovie]);

  useEffect( () => {
    const getMovies = axiosInstance.get('/movies')
      .then((response) => {
        console.log('Success, got data : ', response.data);
        setMoviesData(response.data);
        if (watchedDisplay === 'AllMovies') {
          setCurrentMovies(response.data);
        } else {
          let newCurrentMovies = [];
          for (let movie of response.data) {
            if ((watchedDisplay === 'watched' && movie.watched) || (watchedDisplay === 'toWatch' && !movie.watched)) {
            newCurrentMovies.push(movie);
            }
          }
          setCurrentMovies(newCurrentMovies);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log('Server error: ', error.response.status);
        } else {
          console.log('Error: no response from server');
        }
      });
      return;
  }, [setMoviesData, setMoviesData, watchedDisplay, newMovie, updateMovie]);

  return (
    <>
      <h1>Movie List</h1>
      <AddMovie
        setNewMovie={setNewMovie}
        moviesData={moviesData}
        setCurrentMovies={setCurrentMovies}
        setWatchedDisplay={setWatchedDisplay}
      />
      <Search
        setCurrentMovies={setCurrentMovies}
        moviesData={moviesData}
        setWatchedDisplay={setWatchedDisplay}
      />
      <ToggleWatchedDisplay
        moviesData={moviesData}
        setCurrentMovies={setCurrentMovies}
        setWatchedDisplay={setWatchedDisplay}
        watchedDisplay={watchedDisplay}
      />
      <MovieList
        currentMovies={currentMovies}
        moviesData={moviesData}
        setUpdateMovie={setUpdateMovie}
        setCurrentMovies={setCurrentMovies}
        watchedDisplay={watchedDisplay}
      />
    </>
  );
};

export default App;