const path = require("path");
var friendsData = require("../data/friends.js");

module.exports = function(app) {

//listening for get request to /api/friends route callback function that delivers survey data (data inside friends.js) as json object
//the api/friends route is asking for the server for the friends data in json format
app.get("/api/friends", function(req, res) {
    res.json(friendsData);
    for(var i = 0; i < friendsData.length; i++){
        console.log(friendsData[i].scores);
        // add the users score - var
    for(var j = 0; j < friendsData[j].scores[j];){
        //add numbers here
    }
        console.log(friendsData[i].score[j]);
        //loop through scores
        //add all the numbers - var
        //store in new array 
        //Subtract the users score from the friends score, lowest number is match
        //check to see whos score is the closest in new array 
        //make new array  
    } 
  });     

//listening for post request to /api/friends callback function that delivers survey data as json object(post to friends.js?)
app.post("/api/friends", function(req, res) {

    var addFriend = req.body
    var newScores = addFriend.scores

    for(var i = 0; i < friendsData; i++){
        console.log(friendsData.scores);
    }

    friendsData.push(req.body);
  });    

}