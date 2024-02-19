const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.movies.getAll((err, movies) => {
      if (err) {
        res.status(500).send();
        return
      }
      res.status(200).json(movies);
    });
  },

  post: (req, res) => {
    let { id, title, watched } = req.body;
    if (watched) {
      watched = 1;
    } else {
      watched = 0;
    }
    if (!id) {
      const newMovie = { title, watched };
      models.movies.create(newMovie, (err) => {
        if (err) {
          res.status(500).send();
          return
        }
        res.status(201).send();
      });
    } else {
      const movie = { id, title, watched };
      models.movies.update(movie, (err) => {
        if (err) {
          res.status(500).send();
          return
        }
        res.status(201).send();
      });
    }
  }
}