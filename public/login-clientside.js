




function verifyLogin() {
   // body...
   console.log("inside of verify login");

   var password = $("#password").val();
   console.log("password: " + password);

   var username = $("#username").val();
   console.log("username: " + username);
   var params = {username:username, password:password};

   $.get("/verifyLogin",params , function(data) {
      console.log("Back from the server with : ");
      console.log(data);

      if (data[0] != null) {

        // session.username = data[0].username;
         //console.log(session.username);
         //window.location.replace("/home.html");


      } else {
         $("#h2").replaceWith("<h2>try again niger</h2>");
      }

   });


}
