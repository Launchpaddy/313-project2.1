const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://tmp_user:tmp_pass@localhost:5432/perform";
const pool = new Pool({connectionString: connectionString});

console.log("connectionString  = " + connectionString);

/*********************************************************
* Once we are signed in we have an id to work with and get 
* all the users data that way
*********************************************************/
function getUserById(id, callback) {

   console.log("searching db with: " + id);

   var sql = 'SELECT * FROM users WHERE id = $1::int';

   var params = [id];


   pool.query(sql, params, function(err, result) {

      if (err) {

         console.log(err);
         callback(err, "Erro with DB");
      }
     console.log("Found result: " + JSON.stringify(result.rows));

      callback(null, result.rows);
   });
}

/*********************************************************
* inserts into our database 
*********************************************************/
function createUser(display_name, username, password, callback) {
   console.log("creating new user named: " + display_name + ". username: " + username + ". password: " + password);

   var sql = "INSERT INTO users (display_name, username, password) VALUES ($1, $2, $3);";

   console.log(sql);
   //var params = [id];
   var params = [display_name, username, password];


   pool.query(sql, params, function(err, result) {

      if (err) {

         console.log(err);
         callback(err, "Erro with creating user in DB");
      }
     console.log("Found result: " + JSON.stringify(result));

      callback(null, result);
   });
}

/*********************************************************
* Looks for a username and sends back the results
*********************************************************/
function verifyLogin(username, password, callback) {
   console.log("searching db for username: " + username + " password: " + password);

   var sql = 'SELECT * FROM users WHERE username = $1';


   var params = [username];


   pool.query(sql, params, function(err, result) {

      if (err) {
         console.log(err);
         callback(err, "Erro with DB");
      }
     console.log("Found result: " + JSON.stringify(result.rows));

      callback(null, result.rows);
   });
}

module.exports = {
   getUserById: getUserById,
   createUser: createUser,
   verifyLogin: verifyLogin
}