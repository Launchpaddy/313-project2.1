const sportModel = require("../models/sportModel.js")


function getAllUsersSports(req, res) {

   var user_id = req.query.user_id;

   sportModel.getAllUsersSports(user_id, function(error, result) {
      res.json(result);
      console.log("now returning all users sports: ");
      console.log(result);
   });

}

function getSportById(req, res) {

   var sportId = req.session.user
   console.log("sportId inside of the controler: " + sportId);
   sportModel.getSportById(sportId, function(error,result) {
      res.json(result);
   });

}

module.exports = {
   getAllUsersSports: getAllUsersSports,
   getSportById: getSportById

};