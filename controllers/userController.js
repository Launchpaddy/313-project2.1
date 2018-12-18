const userModel = require("../models/userModel.js");
const bcrypt = require('bcrypt');
const saltRounds = 10;

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
function checkLogin(req, res, next) {
   
   if(req.session.username) {
      next();
   }
   else {  
      console.log("in Check Login and we arn't loged in");
      var result = {success: false};
      console.log(result.success);
      res.json(result);
      
   }
   
}

function logout( req, res) {
 
   var result = {success: false};

	
	if (req.session.logedIn) {
		req.session.destroy();
		result = {success: true};
	}

	res.json(result);

}


 function login(req2, res2) {
   var username = req2.body.username;
   var password = req2.body.password;
   console.log("username: " + username);

  
   userModel.verifyLogin(username, password,  function(error, result) {

      for(var i = 0; i < result.length;i++ ) {
         bcrypt.compare(password, result[i].password, function(err, res) {

            if(res == true) {
               if (result[0] != null) {
   
            
                  console.log("passed verify login and adding them to the session");
                  req2.session.logedIn = true;
                  req2.session.username = result[0].username;
                  req2.session.display_name = result[0].display_name;
                  req2.session.password = result[0].password;
                  req2.session.user_id = result[0].id; // this is from the db with query return * from user with id;
                  console.log("results from verify login: ")
                  console.log(result[0]);
         
                  var sessionStuff = {
                     result: result,
                     username: req.session.username,
                     display_name: req.session.display_name,
                     password: req.session.password,
                     user_id: req.session.user_id
                  };
                  console.log("session Stuff: " + sessionStuff);
                  res2.json(sessionStuff);
         
               } else {
                  res2.json({success: false});
               }
            }
            // res == true
         });
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
   bcrypt.hash(password, saltRounds, function(err, hash) {
      // Store hash in your password DB.
      console.log(hash);
      console.log("in user Conrtroler with: " + display_name + ". username: " + username + ". password hash: " + hash);

      userModel.createUser(display_name, username, hash, function(error, result) {
         res.json(result);
      });
    });

  

}


/*********************************************************
*
*********************************************************/
module.exports = {
   getUserById: getUserById,
   createUser: createUser,
   getAllUsers: getAllUsers,
   checkLogin: checkLogin,
   login: login,
   logout: logout
};
