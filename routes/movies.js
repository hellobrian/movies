var Movie = require('../models/movie');
var express = require('express');
var router = express.Router();

router.route('/movies')
  .get(function(req, res) {
    Movie.find(function(err, movies) {
      if (err) {
        return res.send(err);
      }

      res.json(movies);
    });
  })
  .post(function(req, res) {
    var movie = new Movie(req.body);
    movie.save(function(err) {
      if (err) {
        return res.send(err);
      }
      res.send({ message: 'Movie Added' });
    });
  });

router.route('/movies/:id')
  .get(function(req, res) {
    Movie.findOne({ _id: req.params.id }, function(err, movie) {
      if (err) {
        return res.send(err);
      }
      res.json(movie);
    });
  })
  .put(function(req, res) {
    Movie.findOne({ _id: req.params.id }, function(err, movie) {
      if (err) {
        return res.send(err);
      }

      for (prop in req.body) {
        movie[prop] = req.body[prop];
      }

      movie.save(function(err) {
        if (err) {
          return res.send(err);
        }
        res.json({ message: 'Movie updated!' });
      });
    });
  })
  .delete(function(req, res) {
    Movie.remove({ _id: req.params.id }, function(err, movie) {
      if (err) {
        return res.send(err);
      }
      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;