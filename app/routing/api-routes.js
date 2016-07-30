// Link our routes to our data sources

var friendData = require('../data/friends.js');
var path = require('path');

module.exports = function(app) {

	// API GET Requests
	// Below code handles when users "visit" a page.
	// In each of the below cases when a user visits a link
	// (ex. localhost:PORT/api/admin) They are shown a JSON of the data in the table

	app.get('/api/friends', function(req, res){
		res.json(friendData.friends);  //from friends.js file and friends is name of the list of friends
	});


	app.post('/api/friends', function(req, res){
		console.log(req.body.name);
		console.log('req body q1:' + req.body.scores);
		res.json(friendData.findFriend(req.body.scores));

		//put it in here 
	});
}

