var friends = require("../data/friends");


module.exports = function(app) {
 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    userInputScore = req.body.scores;
    
    var totalDiff = 500;

    for(i = 0; i < friends.length; i++){
        var scoreDiff = 0;

        var yourMatch = "";
        var yourMatchImg = "";

        for( j=0; j<userInputScore.length; j++){
          scoreDiff += Math.abs(friends[i].scores[j] - userInputScore[j]);
        }

        if (scoreDiff < totalDiff ){
          totalDiff = scoreDiff;
          yourMatch = friends[i].name;
          yourMatchImg = friends[i].photo;
        }

    }

    res.json({
      yourMatch: yourMatch,
      yourMatchImg: yourMatchImg
    });
     
    friends.push(req.body);
     
  });

}