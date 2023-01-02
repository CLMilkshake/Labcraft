/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "CLMilkshake",
		password: "15"
	},
	{ // Object @ 1 index
		username: "matt",
		password: "academy"
	},
	{ // Object @ 2 index
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			
            document.getElementById("Username").innerHTML = user;
			window.location = "https://clmilkshake.github.io/Labcraft/index.html"
			var signedIn = true
			localStorage.setItem("signedIn", "true");
			localStorage.setItem("user", JSON.parse(user));
			// stop the function if this is found to be true
			return
		}
	}
	console.log("incorrect username or password")
	var element = document.getElementById("incorrectPassword");
	element.style.opacity = "1";
}