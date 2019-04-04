var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
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
                var distance = Math.pow(difference, 2);
                sum += distance;
            }

            if (sum < closest) {
                closest = sum;
                closestFriend = friends[i];
            }
        }

        res.json(closestFriend);
    });
}