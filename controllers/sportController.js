const sportModel = require("../models/sportModel.js")

/*********************************************************
* calls the model
*********************************************************/
function getAllUsersSports(req, res) {

   var user_id = req.session.user_id;

   sportModel.getAllUsersSports(user_id, function(error, result) {
      res.json(result);
      console.log("now returning all users sports: ");
      console.log(result);
   });

}

/*********************************************************
* calls the model
*********************************************************/
function getActivitiesBySportId(req, res) {

   // this needs a todo work
   var sport_id = req.query.sport_id;
   console.log("sportId inside of the controler: " + sport_id);
   sportModel.getActivityBySportId(sport_id, function(error,result) {
      res.json(result);
   });

}

/*********************************************************
* calls the model
*********************************************************/
function addSport(req, res) {

   console.log("anything in session?" + req.session.username + req.session.password);
   var user_id = req.session.user_id;

   var name = req.query.name;
   console.log("inside add sport with the name : " + name + "and user_id: "+ user_id );
   sportModel.addSport(user_id, name, function(error, result) {
      res.json(result);
   })
}

module.exports = {
   getAllUsersSports: getAllUsersSports,
   getActivitiesBySportId: getActivitiesBySportId,
   addSport: addSport

};