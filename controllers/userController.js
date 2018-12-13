const userModel = require("../models/userModel.js");


/*********************************************************
*
*********************************************************/
function getUserById(req, res) {

   var userId = req.query.userId;
   console.log("user id inside of user controler : ");
   console.log(userId);
   userModel.getUserById(userId, function(error,result) {
      res.json(result);
   });

}


/*********************************************************
*
*********************************************************/
function getAllUsers(req, res) {

   userModel.getAllUsers(function(error, result) {
      res.json(result);
   });

}


/*********************************************************
*
*********************************************************/
function verifyLogin(req, res) {
   var username = req.query.username;
   var password = req.query.password;
   var user_id = req.body.user_id;

   userModel.verifyLogin(username, password,  function(error, result) {
      if (result[0] != null) {
<<<<<<< HEAD
         console.log("the result 0 is not null so we should havea  reall person")
         //res.session.username = "stroign in session";

         req.session.username = result[0].username;
         req.session.password = result[0].password;
         req.session.user_id = result[0].user_id;
         res.json(result);
=======

         console.log("passed verify login and adding them to the session");

         req.session.username = result[0].username;
         req.session.display_name = result[0].display_name;
         req.session.password = result[0].password;

         var sessionStuff = {
            result: result,
            username: req.session.username,
            display_name: req.session.display_name,
            password: req.session.password
         };

         res.json(sessionStuff);

>>>>>>> d61631b9869144d5743ebbbf659bd5713d4faad8
      } else {
         res.json({success: false});
      }
   })

}

/*********************************************************
*
*********************************************************/
function createUser(req, res) {

   var display_name = req.body.display_name;
   var username = req.body.username;
   var password = req.body.password;
   

   console.log("in user Conrtroler with: " + display_name + ". username: " + username + ". password: " + password);

   userModel.createUser(display_name, username, password, function(error, result) {
      res.json(result);
   });

}


/*********************************************************
*
*********************************************************/
module.exports = {
   getUserById: getUserById,
   createUser: createUser,
   getAllUsers: getAllUsers,
   verifyLogin: verifyLogin
};
