const activitiesModel = require("../models/activitiesModel.js");

function getActivitiesBySportId(req, res) { 
    console.log("inside activities controller : ");
    var sport_id = req.query.sport_id;
    var params = [sport_id];
    activitiesModel.getActivitiesBySportId(params, function (errro, result) {
        res.json(result);
    })
}

function addActivity(req, res)  {

    console.log("inside activites controller");
    var name = req.query.name;
    var day = req.query.day;
    var place = req.query.place;
    var hour_duration = req.query.duration;
    var inviroment_quality = req.query.inviroment_quality;
    var sport_id = req.query.sport_id;
    var performance_level  = req.query.performance;
    var fun_level = req.query.fun;
    var health = req.query.health;
    console.log("name: " + name);
   console.log("date: " + date);
   console.log("place: " + place);
   console.log("duration: " + hour_duration);
   console.log("quality: " + inviroment_quality);
   console.log("sport id: " + sport_id);
   console.log("performance : " + performance_level);
   console.log("fun: " + fun_level);
   console.log("health: " + health);

    console.log(name + day + place + hour_duration );
    
    var params = [name, day, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health];
    activitiesModel.addActivity(params, function (errro, result) {
        res.json(result);
    })

}

module.exports = {
    addActivity: addActivity,
    getActivitiesBySportId: getActivitiesBySportId
 
 };