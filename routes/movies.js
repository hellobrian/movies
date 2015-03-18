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
  }); 