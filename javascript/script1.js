var database = [
	{
		username: "rilakkuma",
		password: "supersecret"
	}
];

var newsfeed = [
	{
		username: "korilakkuma",
		timeline: "im hungry"
	},
	{
		username: "mike",
		timeline: "wanna eat chili"
	}
];

var userNamePrompt = prompt("Username?");
var passwordPrompt = prompt("password");

function signIn(username, password) {
	if (username === database[0].username && 
		password === database[0].password)
	{
		console.log(newsfeed);
	}
	else 
	{
		alert("sorry wrong username and password");
	}
}

signIn(userNamePrompt, passwordPrompt);