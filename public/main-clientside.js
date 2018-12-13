
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
         $("#usersSports").append("<a onclick='displaySport("+ sport.id + ", \"" + sport.name + "\")'>" + sport.name + "</a><br><br>");//"<a>" + sports.name + "</a> <br><br>");
        
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

function displaySport(sport_id, sport_name) {
   console.log("sport id: " + sport_id);
   console.log("sport name:" + sport_name);
   var params = {sport_id: sport_id};
   $.get("/getSportById", params, function(data) { 
      console.log("back from get sport by id with " + data);
      
         $("#h2").replaceWith("<h2>try again</h2>");
         //$("#loginForm").replaceWith("<h2>try again</h2>");

         var string = '<div id="center"  class="col-sm-8 text-left">';
         string += "<center><h2>" + sport_name + "</h2></center>";
         //string += '<form onsubmit="return addActivity()" method="POST">'
         string += '<div class="container">'
         string += '<label for="activity"><b>Add Activity</b></label>'
         string += '<input type="text"   placeholder="Enter Activity"     name="name" required>'
         string += '<input type="date"   placeholder="Enter Date"         name="date" required>'
         string += '<input type="text"   Placeholder="Enter Location"     name="place" required>'
         string += '<p>Duration Hours 1-10:'
         string += '<input type="range" min="1" max="10" value="1" class="slider" name="duration">'
         string += '</p>'
         string += '<p>Inviroment Quality 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" name="quality">'
         string += '</p>'
         string += '<p>Performance Level 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" name="performance">'
         string += '</p>'
         string += '<p>Fun Range 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" name="fun">'
         string += '</p>'
         string += '<p>Health Range 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" name="health">'
         string += '</p>'
         string += '<input type="hidden" name="sport_id" value="<?php echo $sport_id?>" >'
         string += '<button onclick="addActivity()">Add new Activity</button>'
         string += '<div>'
        // string += '<form>'
         string += '</div>';
         $("#center").replaceWith(string);
 
       

   })

}

