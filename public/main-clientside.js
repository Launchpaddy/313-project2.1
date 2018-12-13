
/**
*
*/
function searchUserById() {
   // body...
   console.log("searchUserById");
   var userId = $("#userId").val();
   console.log("userId: " + userId);

   $.get("/user", { userId: userId }, function(data) {
      console.log("Back from the server with : ");
      console.log(data);

      for (var i = 0; i < data.length ; i++) {
         var users = data[i];
         $("#ulUsers").append("<li>" + users.id + " " + users.display_name +"</li>");
         console.log(users);
      }
   });
}

/**
*
*/
function searchSportById() {
   // body...
    console.log("searchSportById");

   var sportId = $("#sportId").val();
   console.log("sportId: " + sportId);
   //var params = [{sportId: sportId}];

   $.get("/sport", {sportId:sportId}, function(data) {
      console.log("Back from the server with : ");
      console.log(data);

      for (var i = 0; i < data.length ; i++) {
         var sports = data[i];
         $("#ulUsers").append("<li>" + sports.id + " " + sports.name +"</li>");
         console.log(sports);
      }
   });
}

/**
*
*/
function getAllUsersSports() {

   $.get("/sports", function(data) {
      console.log("Back from the server with : ");
      // console.log(data);
      console.log(data);
      $("#usersSports").replaceWith('<div id="usersSports"  class="col-sm-8 text-left"><h1> Sports</h1><br></div>');

      for (var i = 0; i < data.length ; i++) {
         var sport = data[i];
         $("#usersSports").append("<button onclick=\"displaySport(sport.id)\">sport.name</button> <br><br>");
      }

   }) ;
}

function logOut() {
   
   window.location.replace("/login.html");
   // $.post("/logOut", function(data) {
   //    console.log("loging out");
   // }) ;
}

function addSport() {
   console.log("inside of add Sport on client side");

   var name = $("#sportName").val();
   console.log("sport name: " + name);

// hello 
   var params = {name: name};


   $.post("/addSport",params , function(data) {
         console.log("Back from adding sport with : ");
         console.log(data);
         if (data[0] != null) {
            console.log("added a new sport");
            // $("#loginForm").replaceWith('<label for="username"><b>New Username</b></label><input type="text" id="username" placeholder="Enter Username"  required> <br> <label for="password"><b>Password</b></label>    <input type="password" id="password" placeholder="Enter Password" required><br>    <button onclick="verifyLogin()">Verify Login</button>');
         }

       });
       getAllUsersSports();
}

function verifyLogin() {
   $.get("/verifyLogin", function(req, res) {

   });
}

