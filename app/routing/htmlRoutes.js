// var express = require("express");
// var path = require("path");

var path = require("path");
var router = require('express').Router();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


  
  
router.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// router.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });

module.exports = router;  