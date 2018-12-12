const userModel = require("../models/userModel.js")
var session = require("express-session");
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
      if (result[0] != null) {
         console.log("the result 0 is not null so we should havea  reall person")
         //res.session.username = "stroign in session";
         res.json(result);
      } else {
         res.json({success: false});
      }
   })

}



function createUser(req, res) {

   var display_name = req.body.display_name;
   var username = req.body.username;
   var password = req.body.password;

   console.log("in user Conrtroler with: " + display_name + ". username: " + username + ". password: " + password);

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
