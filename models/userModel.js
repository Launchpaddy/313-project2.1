const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://tmp_user:tmp_pass@localhost:5432/perform";
const pool = new Pool({connectionString: connectionString});

console.log("connectionString  = " + connectionString);


function getAllUsers(callback) {
   // body...
   // var result = {
   //    users: [
   //    {id:1, name:"trevik0"},
   //    {id:2, name:"trevik1"},
   //    {id:3, name:"trevik2"},
   //    {id:4, name:"trevik3"},
   //    {id:5, name:"trevik4"},
   //    {id:6, name:"trevik5"}
   //    ]
   // }
   // callback(null, result);

   console.log("searching db with: " + id);

   var sql = 'SELECT * FROM users';

   pool.query(sql, function(err, result) {

      if (err) {

         console.log(err);
         callback(err, "Erro with DB");
      }
     console.log("Found result: " + JSON.stringify(result.rows));

      callback(null, result.rows);
   });
}

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

function createUser(display_name, username, password, callback) {
   console.log("creating new user named: " + display_name + ". username: " + username + ". password: " + password);
   // var result = {success: true, name: name};
   // callback(null, result);
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

function verifyLogin(username, password, callback) {
   console.log("searching db for username: " + username + " password: " + password);

   var sql = 'SELECT * FROM users WHERE username = $1 AND password = $2';

   var params = [username, password];


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
   getAllUsers: getAllUsers,
   getUserById: getUserById,
   createUser: createUser,
   verifyLogin: verifyLogin
}