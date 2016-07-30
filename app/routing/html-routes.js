/*
Your html-routes.js file should include two routes:
A GET Route to /survey which should display the survey page.
A default USE route that leads to home.html which displays the home page.
*/


// Dependencies
var path = require('path'); 

module.exports = function(app){
// Routes
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
})

app.get('/survey', function(req, res){
	res.sendFile(path.join(__dirname, '../public/survey.html'));
})

app.use('/', function(req, res){
	res.sendFile(path.join(__dirname, '../public/home.html'));
});
}