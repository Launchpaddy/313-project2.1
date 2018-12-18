const express = require("express");
const path = require("path");


const userController  = require("./controllers/userController");
const sportController = require("./controllers/sportController");
const activitesController = require("./controllers/activitiesController");

const PORT = process.env.PORT || 5000;
var app = express();

var session = require("express-session");
var parseurl = require('parseurl');

app.use(session({
   secret: 'secret secret',
   resave: false,
   saveUninitialized: true
}));

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());

app.use(express.urlencoded({ extented: true })); //{extented:true}

app.get("/user", userController.checkLogin, userController.getUserById);

app.post("/login", userController.login);

app.post("/logout", userController.logout);

app.post("/checkLogin", userController.checkLogin);

app.get("/users", userController.checkLogin,  userController.getAllUsers);

app.post("/createUser", userController.checkLogin, userController.createUser);


app.get("/getActivitiesBySportId", userController.checkLogin, sportController.getActivitiesBySportId);

app.get("/sports", userController.checkLogin, sportController.getAllUsersSports);

app.post("/addSport", userController.checkLogin, sportController.addSport);


app.post("/addActivity", userController.checkLogin, activitesController.addActivity)

app.listen(PORT, function() {
   console.log("server listening on port :" + PORT);
});


