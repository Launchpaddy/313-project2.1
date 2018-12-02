const userModel = require("../models/userModel.js")

function getUserById(req, res) {

   var userId = req.body.userId;
   userModel.getUserById(userId, function(error,result) {
      res.json(result);
   });

}

function getAllUsers(req, res) {

   userModel.getAllUsers(function(error, result) {
      res.json(result);
   });

}



function createUser(req, res) {

   var display_name = req.body.display_name;
   var username = req.body.username;
   var password = req.body.password;

   userModel.createUser(display_name, username, password, function(error, result) {
      res.json(result);
   });

}

module.exports = {
   getUserById: getUserById,
   createUser: createUser,
   getAllUsers: getAllUsers
};
