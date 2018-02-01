var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.port || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// add this for the static files. Use with the public folder (like assets).
app.use(express.static("public"));
// capturing the answers to the questions
var surveyData = [];
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT)});