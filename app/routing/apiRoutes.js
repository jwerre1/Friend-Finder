// var express = require('express')
var express = require("express");
var app = express();

var path = require("path");
var router = require('express').Router();
var friends = require("../data/friends");
var match = require("../public/javascript/match");



module.exports = function(app) {
// middleware that is specific to this router
app.use(express.json());

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;

    console.log(newPerson);

    friends.push(newPerson);

    var check = friends.length - 1;
    //Arbitrary large value.
    var closest = 10000000000;
    var closestFriend;
        for (i = 0; i < check; i++) {
            var sum = 0;
            for (j = 0; j < friends[i].scores.length; j++) {

                var difference = parseInt(friends[check].scores[j]) - parseInt(friends[i].scores[j]);
                console.log("diff" + difference);
                var distance = Math.pow(difference, 2);
                console.log("dist" + distance)
                sum += distance;
                console.log("sum" + sum);
            }
            // var euclidDist = Math.pow(sum, .5);
            // console.log(euclidDist);

            if (sum < closest) {
                closest = sum;
                closestFriend = friends[i];
            }
        }




   console.log(closest);
   console.log(closestFriend);
   match = [];
   match.push(closestFriend);
   console.log(match);

    res.json(closestFriend);



});

app.post("/api/clear", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
friends = [];

});
}