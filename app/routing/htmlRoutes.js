// var express = require("express");
// var path = require("path");

var path = require("path");
// var router = require('express').Router();
module.exports = function(app) {
// middleware that is specific to this router
app.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// router.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });

}