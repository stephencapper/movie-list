const db = require('../db')

module.exports = {
  getAll: (callback) => {
    const getMoviesQuery = 'SELECT * from MOVIES';
    db.query(getMoviesQuery, [], (err, movies) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, movies);
    });
  },

  create: (newMovie, callback) => {
    const createMovieQuery = 'INSERT INTO movies (title, watched) VALUES (?, ?)';
    db.query(createMovieQuery, [newMovie.title, newMovie.watched], (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback();
    });
  },

  update: (movie, callback) => {
    const updateMovieQuery = 'UPDATE movies SET watched = ? WHERE id = ?';
    db.query(updateMovieQuery, [movie.watched, movie.id], (err) => {
      if (err) {
        callback(err);
        return;
      }
      callback();
    });
  }


}