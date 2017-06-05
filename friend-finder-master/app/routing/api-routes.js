var bodyParser = require('body-parser');
var path = require('path');
var friends = require('../data/friends.js');

//routes & get/post
module.exports = function(app){


	//get info input here
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});


	//make post here
	app.post('/api/friends', function(req, res) {

		var totalDifference = 100;
		var bestMatch;

		friends.forEach(function(friends) {
			var newDiff = 0;
			console.log("looping");

			for(i = 0; i < friends.scores.length; i++) {
				newDiff += Match.abs(friend.scores[i] = req.body.scores[i])
			}
			if (newDiff <= totalDifference) {
				totalDifference = newDiff;
				bestMatch = friend;
			}
		});

		res.json(bestMatch);
		friends.push(req.body);
	});
};