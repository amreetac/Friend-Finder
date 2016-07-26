/*
Your html-routes.js file should include two routes:
A GET Route to /survey which should display the survey page.
A default USE route that leads to home.html which displays the home page.
*/


// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path'); 

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));




// Data
var friends = [

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


]

// Routes
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})


app.get('/api/friends?', function(req, res) {

	var chosen = req.params.friends;

	if(chosen){
		console.log(chosen);

		for (var i=0; i <friends.length; i++){

			if (chosen == friends[i].routeName){
				res.json(friends[i]);
				return;
			}
		}

		res.send("No friend found");
	}

	else{
		res.json(friends);
	}
})

/*
app.post('/api/new', function(req, res){

	var newfriend = req.body;

	console.log(newfriend);

	characters.push(newfriend);

	res.json(newfriend);
})

*/

app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})