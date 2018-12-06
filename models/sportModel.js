const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://tmp_user:tmp_pass@localhost:5432/perform";
const pool = new Pool({connectionString: connectionString});

console.log("connectionString  = " + connectionString);


function getAllUsersSports(callback) {
   // body...
   var result = {
      sports: [
      {id:1, sport:"sport0"},
      {id:2, sport:"sport1"},
      {id:3, sport:"sport2"},
      {id:4, sport:"sport3"},
      {id:5, sport:"sport4"},
      {id:6, sport:"sport5"}
      ]
   }
   callback(null, result);
}

function getSportById(id, callback) {

   console.log("searching db with: " + id);

   var sql = 'SELECT * FROM sports WHERE id = $1::int';

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

module.exports = {
   getAllUsersSports: getAllUsersSports,
   getSportById: getSportById
}