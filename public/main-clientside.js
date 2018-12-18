
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
   
   
   $.post("/logout", function(result) {

      if(result.success  == true) {
         window.location.replace("/login.html");
      } else {
         console.log("still loged in");
         window.location.replace("/login.html");
      }

   });
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

function checkLogin() {
   console.log("inside of check login");

   $.post("/checkLogin", function(result) {

      console.log("inside of check login with req:");
      console.log(result);
      if(result.success == false) {
         window.location.replace("/login.html");
      }

   });
}

function addActivity() {
   console.log("add activity has been called now we need ot get data from form");
   
   var name = $("#name").val();
   var date = $("#date").val();
   var place = $("#place").val();
   var hour_duration = $("#duration").val();
   var inviroment_quality = $("#quality").val();
   var sport_id = $("#sport_id").val();
   var sport_name = $("sport_name").val();
   var performance_level = $("#performance").val();
   var fun_level = $("#fun").val();
   var health = $("#health").val();
console.log(name, date, place, hour_duration, inviroment_quality, sport_id, performance_level, fun_level, health);

var params = {name: name, date:date, place:place, hour_duration:hour_duration, inviroment_quality:inviroment_quality, sport_id:sport_id, performance_level:performance_level, fun_level:fun_level, health:health};

$.post("/addActivity", params, function(data) {
   console.log("Back from adding sport with : ");
   displaySport(sport_id, sport_name);
         console.log(data);
         if (data[0] != null) {
            console.log("added a new activity");
            // $("#loginForm").replaceWith('<label for="username"><b>New Username</b></label><input type="text" id="username" placeholder="Enter Username"  required> <br> <label for="password"><b>Password</b></label>    <input type="password" id="password" placeholder="Enter Password" required><br>    <button onclick="verifyLogin()">Verify Login</button>');
         } 
})



}

function displaySport(sport_id, sport_name) {
   console.log("sport id: " + sport_id);
   console.log("sport name:" + sport_name);
   var params = {sport_id: sport_id};
   $.get("/getActivitiesBySportId", params, function(data) { 
      console.log("back from get sport by id with ");
      console.log(data);
      
         $("#h2").replaceWith("<h2>try again</h2>");
         //$("#loginForm").replaceWith("<h2>try again</h2>");

         var string = '<div id="center"  class="col-sm-4 text-left">';
         string += "<center><h2>" + sport_name + "</h2></center>";
         string += '<div class="container">'
         string += '<label for="activity"><b>Add Activity</b></label>'
         string += '<input type="text"   placeholder="Enter Activity" id="name" name="name" required>'
         string += '<input type="date"   placeholder="Enter Date"      id="date"   name="date" required>'
         string += '<input type="text"   Placeholder="Enter Location"  id="place"   name="place" required>'
         string += '<p>Duration Hours 1-10:'
         string += '<input type="range" min="1" max="10" value="1" class="slider" id="duration" name="duration">'
         string += '</p>'
         string += '<p>Inviroment Quality 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" id="quality" name="quality">'
         string += '</p>'
         string += '<p>Performance Level 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" id="performance" name="performance">'
         string += '</p>'
         string += '<p>Fun Range 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider" id="fun" name="fun">'
         string += '</p>'
         string += '<p>Health Range 1-100:'
         string += '<input type="range" min="1" max="100" value="50" class="slider"  id="health" name="health">'
         string += '</p>'
         string += '<input type="hidden" id="sport_id" name="sport_id" value="' + sport_id + '" >'
         string += '<input type="hidden" id="sport_name" name="sport_name" value="' + sport_name + '" >'
         string += '<button onclick=\"addActivity()\">Add new Activity</button>'
         string += '<div>'

         string += '</div>';

         var str = '<table class="table table-striped">';
         str += '<thread class="thread-dark">'
         str += '<tr>'
         str += '<th scope="col">Name</th>'
         str += '<th scope="col">Date </th>'
         str += '<th scope="col">Location</th>'
         str += '<th scope="col">Hours</th>'
         str += '<th scope="col">Inviroment</th>'
         str += '<th scope="col">Performance</th>'
         str += '<th scope="col">Fun Level</th>'
         str += '<th scope="col">Health</th>'
         str += '</tr>'
         str += '</thread>'
         data.forEach(activity => {
            str += "<tr>"
            str += "<td>" + activity.name + "</td>";
            str += "<td>" + activity.day + "</td>";
            str += "<td>" + activity.place + "</td>";
            str += "<td>" + activity.hour_duration + "</td>";
            str += "<td>" + activity.inviroment_quality + "</td>";
            str += "<td>" + activity.performance_level + "</td>";
            str += "<td>" + activity.fun_level + "</td>";
            str += "<td>" + activity.health + "</td> </tr>";
         });
         str += " </table>"


         $("#center").replaceWith(string + str);
 
       

   })

}

