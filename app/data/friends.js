// Data

function friendGame() {

this.friends = [

	{
		name: "Amreeta C. ",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAgSAAAAJDRlOTMzYjljLTNjMWYtNGViZi1hZTg0LTVlN2RkMDRkNmE0OQ.jpg",
		scores: [5 , 2, 3, 4, 5, 1, 2, 3, 4, 5]	
	},

	{
		name: "Nicole O.",
		photo: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/1/005/079/1d2/2e35bb7.jpg",
		scores: [1, 4, 3, 5, 2, 1, 2, 3, 4, 5]	
	},

	{
		name: "Stef C.",
		photo: "https://tse2.mm.bing.net/th?id=OIP.Ma83fb175aa2093832f7b055fba404b6bo0&pid=15.1&P=0&w=300&h=300",
		scores: [2, 2, 3, 4, 5, 1, 2, 3, 4, 5]	
	},

	{
		name: "Indrajit C.",
		photo: "https://media.licdn.com/media/AAEAAQAAAAAAAAjYAAAAJGMwNTI4MzJjLThhOTktNGIzYy1iNDFjLWNmNWJiMTcxMTk4OA.jpg",
		scores: [2, 1, 3, 5, 2, 1, 1, 2, 4, 5]	
	},


	{
		name: "Fry.",
		photo: "http://images3.wikia.nocookie.net/__cb20110916120044/en.futurama/images/f/f2/PhilipJ.Fry.png",
		scores: [5, 1, 1, 1, 1, 3, 3, 2, 4, 5]	
	},


	{
		name: "Niki K.",
		photo: "https://tse4.mm.bing.net/th?id=OIP.Mbc916c660f30dc97b09383dfc8a49a1bo0&pid=15.1&P=0&w=300&h=300",
		scores: [5, 5, 5, 5, 1, 2, 1, 1, 4, 5]	
	}


];


this.findFriend = function(newUser) {
	console.log("0_"+ newUser.scores[0]);
	console.log("1_" + newUser.scores[1]);

	var friendList = this.friends;

	var diffMin = 100;

	var bestCompat = -1;

	for (var i=0; i<friendList.length; i++) {

		var friendScores = friendList[i].scores;
		var diff = 0;

		for (var j=0; j<friendScores.length; j++) {
				diff += Math.abs(friendScores[j] - newUser.scores[j]);
		}

		if (diff < diffMin) {
				diffMin = diff; 
				bestCompat = i; // The user with the best compatibility, or smallest difference
		}

    console.log(i+" "+diff+" "+bestCompat);

  }

		this.friends.push(newUser);
		return this.friends[bestCompat];

}

}

module.exports = new friendGame();





//module.exports function (){

//app.get('/api/friends', function(req, res) {

// This code compare scores of 5 users and for each user identifies the user whose score is the closest match (minimum sum of differences)


//}
//}
//}