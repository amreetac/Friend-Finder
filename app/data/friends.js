// Data

function friendGame() {

this.friends = [

	{
		name: "Amreeta C. ",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgSAAAAJDRlOTMzYjljLTNjMWYtNGViZi1hZTg0LTVlN2RkMDRkNmE0OQ.jpg",
		scores: [1 , 2, 3, 4, 5, 1, 2, 3, 4, 5]	
	},

	{
		name: "Nicole O.",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/079/1d2/2e35bb7.jpg",
		scores: [1, 4, 3, 5, 2, 1, 2, 3, 4, 5]	
	},

	{
		name: "Stef C.",
		photo: "http://www.publicdomainpictures.net/pictures/70000/velka/soccer-ball-1390575053DHe.jpg",
		scores: [1, 2, 3, 2, 1, 3, 1, 2, 4, 5]	
	},

	{
		name: "Indrajit C.",
		photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAjYAAAAJGMwNTI4MzJjLThhOTktNGIzYy1iNDFjLWNmNWJiMTcxMTk4OA.jpg",
		scores: [2, 1, 3, 5, 2, 1, 1, 2, 4, 5]	
	},


	{
		name: "Fry.",
		photo: "http://www.publicdomainpictures.net/pictures/10000/velka/food-331287862953TkE2.jpg",
		scores: [4, 1, 1, 1, 1, 3, 3, 2, 4, 5]	
	},


	{
		name: "Niki K.",
		photo: "http://www.publicdomainpictures.net/pictures/120000/velka/double-heart-1426437286BAo.jpg",
		scores: [5, 5, 5, 5, 1, 2, 1, 1, 4, 5]	
	}


];


this.findFriend = function(Score) {

	var friendList = this.friends;

	var diffMin = 100;

	var match = -1;

	for (var i=0; i<friendList.length; i++) {

		var friendScores = friendList[i].scores;
		var diff = 0;

		for (var j=0; j<friendList.length; j++) {
				diff += Math.abs(friendScores[j] - friendScores[i]);
		}

		if (diff < diffMin) {
				diffMin = diff; 
				bestCompat = i; // The user with the best compatibility, or smallest difference
		}

		return this.friends[bestCompat];

	}
}

}

module.exports = new friendGame();





//module.exports function (){

//app.get('/api/friends', function(req, res) {

// This code compare scores of 5 users and for each user identifies the user whose score is the closest match (minimum sum of differences)


//}
//}
//}