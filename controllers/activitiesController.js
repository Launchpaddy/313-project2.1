const activitiesModel = require("../models/activitiesModel.js");

function getActivitiesBySportId(req, res) { 
    var name = req.query.name;
    var day = req.query.day;
    var place = req.query.place;
    var hour_duration = req.query.hour_duration;
    var inviroment_quality = req.query.inviroment_quality;
    var sport_id = req.query.sport_id;
    var performance_level  = req.query.performance_level;
    var fun_level = req.query.fun_level;
    var health = req.query.health;
    
    var params = [name, day, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health];
    console.log("inside activities controller : ");
    activitiesModel.getActivitiesBySportId(params, function (errro, result) {
        res.json(result);
    })
}

function addActivity(req, res)  {

}

module.exports = {
    addActivity: addActivity,
    getActivitiesBySportId: getActivitiesBySportId
 
 };