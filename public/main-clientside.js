
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
      for (var i = 0; i < data.length ; i++) {
         var sports = data[i];
         $("#ulUsers").append("<li>" + sports.id + " " + sports.name +"</li>");
      }
   }) ;
}