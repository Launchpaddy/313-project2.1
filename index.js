const express = require("express");
const path = require("path");


const userController = require("./controllers/userController");

const PORT = process.env.PORT || 5000;
var app = express();

app.use(express.static(path.join(__dirname + "/public")));
app.use(express.json());

app.use(express.urlencoded({ extented: true })); //{extented:true}

app.get("/user", userController.getUserById);

app.get("/users", userController.getAllUsers);

app.post("/user", userController.createUser);

app.listen(PORT, function() {
   console.log("server listening on port :" + PORT);
});


