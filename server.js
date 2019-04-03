// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

var router = require("express").Router();


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./app/routing/htmlRoutes'));
app.use('/survey', require('./app/routing/htmlRoutes'));

app.all("/api/friends", require('./app/routing/apiRoutes'));
app.all("/api/clear", require('./app/routing/apiRoutes'));






  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
