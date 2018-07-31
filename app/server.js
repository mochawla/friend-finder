//requiring dependencies 
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

//setting up server port
var PORT = process.env.PORT || 8080;

//body parser for turning post requests into easy to read JSON objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

//give server access to use htmlroutes to serve requests made to the server
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

//listening for port  
app.listen(PORT, function(){
    console.log("App listening on Port " + PORT);
});
