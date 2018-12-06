const sportModel = require("../models/sportModel.js")


function getAllUsersSports(req, res) {

   sportModel.getAllUsersSports(function(error, result) {
      res.json(result);
   });

}

function getSportById(req, res) {

   var sportId = req.body.sportId;
   sportModel.getSportById(sportId, function(error,result) {
      res.json(result);
   });

}

module.exports = {
   getAllUsersSports: getAllUsersSports,
   getSportById: getSportById

};