function searchUserById() {
   // body...
   console.log("searchUserById");
   var userId = $("#user").val();
   console.log("userId: " + userId);

   $.get("/user", {userId: userId}, function(data) {
      console.log("Back from the server with : ");
      console.log(data);

      for (var i = 0; i < data.length ; i++) {
         var users = data[i];
         $("#ulUsers").append("<li>" + users.id + " " + users.display_name +"</li>");
         console.log(users);
      }
   });
}

function searchSportById() {
   // body...
    console.log("searchSportById");
}