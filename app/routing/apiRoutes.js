// var express = require('express')
var express = require("express");
var app = express();

var path = require("path");
var router = require('express').Router();
var friends = require("../data/friends")

app.use(express.json());

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })


router.get("/api/friends", function (req, res) {
    return res.json(friends);
});

router.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;

    console.log(newPerson);

    friends.push(newPerson);
    //gotta push it to friends.js

    res.json(newPerson);



});

router.post("/api/clear", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
friends = [];

});


module.exports = router;  
