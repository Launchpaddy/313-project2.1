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

    var name = params.name;
    var day = params.day;
    var place = params.place;
    var hour_duration = params.hour_duration;
    var inviroment_quality = params.inviroment_quality;
    var sport_id = params.sport_id;
    var performance_level = params.performance_level;
    var fun_level = params.fun_level;
    var health = params.health;
 
    console.log("adding activity : " + name + "with day" + day);
 
    var sql = "INSERT INTO activities (name, day, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);";
 
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