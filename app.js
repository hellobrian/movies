var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var movies = require('./routes/movies');
var app = express();

// connect to our database
// Ideally, you will obtain DB details from a config file
var dbName = 'movieDB';
var connectionString = 'mongodb://localhost:27017' + dbName;

mongoose.connect(connectionString);

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', movies); 

module.exports = app;