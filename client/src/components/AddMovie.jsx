import React from 'react';

const AddMovie = (props) => {
  const handleAddMovieSubmit = (event) => {
    event.preventDefault();
    let titleToAdd = event.target.children.titleToAdd.value;
    if (titleToAdd.length === 0) {
      return;
    }
    for (let movie of props.moviesData) {
      if (movie.title === titleToAdd) {
        return;
      }
    }
    props.setWatchedDisplay('AllMovies');
    let watched = window.prompt("Have you watched this Movie? Please respond Yes or No", "No");
    if (watched === null || watched.toLowerCase() === 'no') {
      watched = false;
    } else {
      watched = true;
    }
    let newMovie = {};
    newMovie.title = titleToAdd;
    newMovie.watched = watched;
    let newMovieArray = [newMovie];
    let newMoviesData = props.moviesData.concat(newMovieArray);
    props.setNewMovie(newMovie);
    props.setCurrentMovies(newMoviesData);
  };
  return (
    <>
      <form onSubmit={handleAddMovieSubmit}>
        <input type="text" name="titleToAdd" placeholder="Add movie title here"/>
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddMovie;