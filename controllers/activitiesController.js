const activitiesModel = require("../models/activitiesModel.js");

/*********************************************************
* calls the model
*********************************************************/
function getActivitiesBySportId(req, res) { 
    console.log("inside activities controller : ");
    var sport_id = req.query.sport_id;
    var params = [sport_id];
    activitiesModel.getActivitiesBySportId(params, function (errro, result) {
        res.json(result);
    })
}

/*********************************************************
* calls the model
*********************************************************/
function addActivity(req, res)  {

    console.log("inside add activites controller");
    var name            = req.body.name;
    var date            = req.body.date;
    var place           = req.body.place;
    var hour_duration   = req.body.hour_duration;
    var inviroment_quality = req.body.inviroment_quality;
    var sport_id           = req.body.sport_id;
    var performance_level  = req.body.performance_level;
    var fun_level          = req.body.fun_level;
    var health             = req.body.health;
    console.log("name: " + name);
   console.log("date: " + date);
   console.log("place: " + place);
   console.log("duration: " + hour_duration);
   console.log("quality: " + inviroment_quality);
   console.log("sport id: " + sport_id);
   console.log("performance : " + performance_level);
   console.log("fun: " + fun_level);
   console.log("health: " + health);

    console.log(name + date + place + hour_duration );
    
    activitiesModel.addActivity(name, date, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health, function (errro, result) {
        res.json(result);
    })

}

module.exports = {
    addActivity: addActivity,
    getActivitiesBySportId: getActivitiesBySportId
 
 };