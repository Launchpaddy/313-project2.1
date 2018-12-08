




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
      window.location.href = "/home.html";

   });


}
