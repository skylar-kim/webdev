var database = [
	{
		username: "rilakkuma",
		password: "supersecret"
	},
	{
		username: "sky",
		password: "123"
	},
	{
		username: "mike",
		password: "1234"
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

function isUserValid(username, password)
{
	for (var i = 0; i < database.length; i++)
	{
		if (database[i].username === username &&
			database[i].password === password)
		{
			return true;
		}
	}
	return false;
}
function signIn(username, password) {
	if (isUserValid(username, password))
	{
		console.log(newsfeed);
	}
	else 
	{
		alert("sorry wrong username and password");
	}

}

signIn(userNamePrompt, passwordPrompt);