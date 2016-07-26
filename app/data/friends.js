var user1 = new Array(1, 2, 3, 4, 5, 5, 4, 3, 2, 1);
var user2 = new Array(2, 3, 4, 5, 4, 4, 3, 3, 1, 2);
var user3 = new Array(4, 5, 3, 2, 1, 2, 3, 4, 5, 4);
var user4 = new Array(1, 2, 3, 4, 5, 5, 4, 3, 2, 1);
var user5 = new Array(5, 4, 3, 3, 1, 2, 3, 4, 5, 4);
var user = new Array(user1, user2, user3, user4, user5);

for(var i = 0; i<user.length; i++) {
	var diffmin = 100;
	var imatch = 0;
  	for(var j = 0; j < user.length; j++) {
		if (i == j) continue;
		var diff = 0;
		for(var k = 0; k < user[i].length; k++) {
       		diff += Math.abs(user[i][k] - user[j][k]);
		}
		if (diff < diffmin) {
			diffmin = diff;
			imatch = j;
		}
    }
    console.log("User "+(i+1)+" has closest match with User "+(imatch+1)+" and the difference is "+diffmin);

}