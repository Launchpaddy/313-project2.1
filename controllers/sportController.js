const sportModel = require("../models/sportModel.js")


function getAllUsersSports(req, res) {

   var user_id = req.session.user_id;

   sportModel.getAllUsersSports(user_id, function(error, result) {
      res.json(result);
      console.log("now returning all users sports: ");
      console.log(result);
   });

}

function getSportById(req, res) {

   // this needs a todo work
   //var sportId = req.query.sport_id;
   console.log("sportId inside of the controler: " + sportId);
   sportModel.getSportById(sportId, function(error,result) {
      res.json(result);
   });

}


function addSport(req, res) {

   var user_id = req.session.user_id;
   var name = req.body.name;
   sportModel.addSport(user_id, name, function(error, result) {
      res.json(result);
   })
}

module.exports = {
   getAllUsersSports: getAllUsersSports,
   getSportById: getSportById,
   addSport: addSport

};