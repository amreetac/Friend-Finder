/*
var user1 = new Array(1, 2, 3, 4, 5, 5, 4, 3, 2, 1); // array containing scores of user1
var user2 = new Array(2, 3, 4, 5, 4, 4, 3, 3, 1, 2); // array containing scores of user2
var user3 = new Array(4, 5, 3, 2, 1, 2, 3, 4, 5, 4); // array containing scores of user3
var user4 = new Array(1, 2, 3, 4, 5, 5, 4, 3, 2, 1); // array containing scores of user4
var user5 = new Array(5, 4, 3, 3, 1, 2, 3, 4, 5, 4); // array containing scores of user5
var user = new Array(user1, user2, user3, user4, user5); // array containing the 5 users; users are user[i] for i=0,1,..,4

for(var i = 0; i<user.length; i++) { // loop over user[i] i=0 to 4
	var diffmin = 100; //minimum difference. initialized to a large number
	var imatch = 0; // the user which has the best match with user[i].
  	for(var j = 0; j < user.length; j++) { // find difference with j-th user
		if (i == j) continue; // ignore if i=j since only compare among different users
		var diff = 0; // Actual sum of differences in scores between user[i] and user[j].  starting value is zero
		for(var k = 0; k < user[i].length; k++) { // consider k-th score
       		diff += Math.abs(user[i][k] - user[j][k]); // cumulative sum of differences in scores
		}
		if (diff < diffmin) {
			diffmin = diff; // if observed difference with j-th user is less than minimum difference so far then set this as the new minimum difference
			imatch = j; // set user[j] as the user with smallest difference
		}
    }
    console.log("User "+(i+1)+" has closest match with User "+(imatch+1)+" and the difference is "+diffmin);

}
//console.log(friendData);

