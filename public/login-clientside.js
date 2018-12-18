

function createUser() {
   console.log("inside of create User on client side");

   var password = $("#password").val();
   console.log("password: " + password);

   var username = $("#username").val();
   console.log("username: " + username);

   var display_name = $("#display_name").val();
   console.log("display_name: " + display_name);
   var params = {display_name:display_name, username:username, password:password};


   $.post("/createUser",params , function(data) {
         console.log("Back from creating user with : ");
         console.log(data);

      });
      var string = "";
      string += '<label for="username"><b>Username</b></label><input type="text" id="username" placeholder="Enter Username"  required> <br>';
      string += '<label for="password"><b>Password</b></label> <input type="password" id="password" placeholder="Enter Password" required><br> ';
      string += '<button onclick="login()">Login</button>';
      $("#loginForm").replaceWith(string);
}


function login() {
   // body...
   console.log("inside of verify login");

   var password = $("#password").val();
   console.log("password: " + password);

   var username = $("#username").val();
   console.log("username: " + username);
   var params = {username:username, password:password};


   $.post("/login",params , function(data) {
      console.log("Back from the server with : ");
      console.log(data);

      if (data.username != null) {

        // session.username = data[0].username;
         console.log(data.username);

         window.location.href = "/home.html";


      } else {
         $("#h2").replaceWith("<h2>try again</h2>");
         //$("#loginForm").replaceWith("<h2>try again</h2>");

      }

   });

}


function register() {
   var string = "";
      string += '<label for="username"><b>New Username</b></label><input type="text" id="username" placeholder="Enter Username"  required> <br>';
      string += '<label for="display_name"><b>Chose Display Name</b></label><input type="text" id="display_name" placeholder="Enter Display Name"  required> <br>';
      string += '<label for="password"><b>Password</b></label> <input type="password" id="password" placeholder="Enter Password" required><br> ';
      string += '<button onclick="createUser()">Create new Account</button>';
      $("#loginForm").replaceWith(string);
}
