const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL || "postgres://tmp_user:tmp_pass@localhost:5432/perform";
const pool = new Pool({connectionString: connectionString});

console.log("connectionString  = " + connectionString);

function getActivitiesBySportId(sport_id, callback) {

    console.log("searching activies with sport id in model : " + sport_id);
 
    var sql = 'SELECT * FROM activities WHERE sport_id = $1::int';
 
    var params = [sport_id];
 
 
    pool.query(sql, params, function(err, result) {
 
       if (err) {
 
          console.log(err);
          callback(err, "Erro with DB");
       }
      console.log("Found result: " + JSON.stringify(result.rows));
 
       callback(null, result.rows);
    });
 }
 

 function addActivity(params, callback) {

    var name
    var day
    var place
    var hour_duration
    var inviroment_quality
    var sport_id
    var performance_level
    var fun_level
    var health
 
    console.log("adding activity : " + name + "with sport_id" + sport_id);
 
    var sql = "INSERT INTO activities (name, day, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);";
 
    var params = [name, day, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health];
 
 
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
    addActivity: addActivity,
    getActivitiesBySportId: getActivitiesBySportId
 }