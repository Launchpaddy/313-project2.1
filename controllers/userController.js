const userModel = require("../models/userModel.js")

function getUserById(req, res) {

   var userId = req.query.userId;
   console.log("user id inside of user controler : ");
   console.log(userId);
   userModel.getUserById(userId, function(error,result) {
      res.json(result);
   });

}

function getAllUsers(req, res) {

   userModel.getAllUsers(function(error, result) {
      res.json(result);
   });

}

function verifyLogin(req, res) {
   var username = req.query.username;
   var password = req.query.password;

   userModel.verifyLogin(username, password,  function(error, result) {
      res.json(result);
   })

}



function createUser(req, res) {

   var display_name = req.query.display_name;
   var username = req.query.username;
   var password = req.query.password;

   userModel.createUser(display_name, username, password, function(error, result) {
      res.json(result);
   });

}

module.exports = {
   getUserById: getUserById,
   createUser: createUser,
   getAllUsers: getAllUsers,
   verifyLogin: verifyLogin
};
