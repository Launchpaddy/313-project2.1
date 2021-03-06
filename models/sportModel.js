const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://tmp_user:tmp_pass@localhost:5432/perform";
const pool = new Pool({connectionString: connectionString});

console.log("connectionString  = " + connectionString);


/*********************************************************
* Querys the database fro all of a users sports by id
*********************************************************/
function getAllUsersSports(user_id, callback) {

   console.log("searching sport with id in model : " + user_id);

   var sql = 'SELECT * FROM sports WHERE user_id = $1::int';

   var params =  [user_id];

   pool.query(sql, params , function(err, result) {

      if (err) {

         console.log(err);
         callback(err, "Erro with DB");
      }
     console.log("Found result: " + JSON.stringify(result.rows));

      callback(null, result.rows);
   });
}

/*********************************************************
* Once we have a sport we can click on it do get 
* all of its activites
*********************************************************/
function getActivityBySportId(id, callback) {

   console.log("searching for activites in model wiht sport id: " + id);

   var sql = 'SELECT * FROM activities WHERE sport_id = $1::int';

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
* Adding new sports to our db
*********************************************************/
function addSport(user_id, name, callback) {

   console.log("addingSport : " + name + "to user_id" + user_id);

   var sql = "INSERT INTO sports (name, user_id) VALUES ($1, $2 );";

   var params = [name, user_id];


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
   getActivityBySportId: getActivityBySportId,
   addSport: addSport
}