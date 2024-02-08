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
    let newMovie = {};
    newMovie.title = titleToAdd;
    let newMovieArray = [newMovie];
    let newMoviesData = props.moviesData.concat(newMovieArray);
    props.setMoviesData(newMoviesData);
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