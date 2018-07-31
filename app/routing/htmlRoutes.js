const path = require("path");

module.exports = function(app) {

//listening for get request to survey route & running callback function that delivers survey.html as the response
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });  

//listening for get request to root directory(homepage) & running callback function that delivers home.html as the response
app.use( function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

}




