/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ // Object @ 0 index
		username: "CLMilkshake",
		password: "0150"
	},
	{ // Object @ 1 index
		username: "sir1toasts1alot",
		password: "2ManyGames"
	},
	{ // Object @ 2 index
		username: "Computer_Error_",
		password: "Error404"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!");
            document.getElementById("Username").innerHTML = username;
			var signedIn = true
			localStorage.setItem("signedIn", signedIn);
			localStorage.setItem("user", username);
			// stop the function if this is found to be true
			window.location = "https://clmilkshake.github.io/Labcraft/index.html"
			return
		}
	}
	console.log("incorrect username or password")
	var element = document.getElementById("incorrectPassword");
	element.style.opacity = "1";
}

function createAccount()
{
	var username = document.getElementById('createUsername').value
	var password = document.getElementById('createPassword').value
	
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			
            document.getElementById("Username").innerHTML = username;
			var signedIn = true
			localStorage.setItem("user", username);
			// stop the function if this is found to be true
			window.location = "https://clmilkshake.github.io/Labcraft/index.html"
			return
		}
	}

	console.log("incorrect username or password")
	var element = document.getElementById("incorrectPassword");
	element.style.opacity = "1";
}