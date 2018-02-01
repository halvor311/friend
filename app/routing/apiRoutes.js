var surveyData = require("../data/friends")

module.exports = function(app){

app.get("/api/friends", function (req, res){
    res.json(surveyData);
});
app.post("/api/friends", function (req, res) {
    var userInput = req.body;
    var totalDifference = 0;
    var differentArray = [];
    console.log(userInput.name);
    for(var i =0; i < surveyData.length; i++){
        for (var j = 0; j < userInput.scores.length; j++){
            var scoreDiff = Math.abs(surveyData[i].scores[j]- userInput.scores[j]);
            totalDifference += scoreDiff;
        }
    }
    surveyData = [];
    res.send()
});
}
