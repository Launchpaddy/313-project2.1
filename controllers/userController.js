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
function verifyLogin(req, res, next) {
   if(!req.session.logedIn) {
      
      res.json({success: false});
   }
   else {
      
      next();
   }
   
}

function logout( res, res) {
   req.session.logedIn = false;
   res.json({logedIn: false});

}

 function login(req, res) {
   var username = req.query.username;
   var password = req.query.password;
   console.log("username: " + username);
  
   userModel.verifyLogin(username, password,  function(error, result) {
      if (result[0] != null) {

         
         console.log("passed verify login and adding them to the session");
         req.session.logedIn = true;
         req.session.username = result[0].username;
         req.session.display_name = result[0].display_name;
         req.session.password = result[0].password;
         req.session.user_id = result[0].id; // this is from the db with query return * from user with id;
         console.log("results from verify login: " + result[0])

         var sessionStuff = {
            result: result,
            username: req.session.username,
            display_name: req.session.display_name,
            password: req.session.password,
            user_id: req.session.user_id
         };
         console.log("session Stuff: " + sessionStuff);
         res.json(sessionStuff);

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
   verifyLogin: verifyLogin,
   login: login,
   logout: logout
};
