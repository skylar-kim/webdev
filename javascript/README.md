# Javascript

### Javascript Types
1. Number
2. String: "", concat is possible  
```javascript
'This isn\'t very nice'
```
Javascript ignores the single quote in "isn't"  
Casting: this becomes "1034". Don't cast. 
```javascript
10 + "34"
```
3. Boolean: true and false  
In order to compare something, must do === (triple equal)
3 !== 3 becomes false  
4. Undefined: a variable type in javascript, used when nothing is assigned to a variable

### Control Flow
Conditionals
```javascript
var name = "Suzy";
if (name === "Billy")
{
	alert("Hi Billy!");
}
else if (name === "Suzy")
{
	alert("Hi Suzy!");
}
else 
{
	alert("who are you >:(");
}
```
Logical Operators 
```javascript
var name = "Rilakkuma";
var name2 = "Korilakkuma";
if (name === "Rilakkuma" || "Mike")
{
	alert("Hi Billy or Ann!");
}
else if (name === "Rilakkuma" && name2 === "Korilakkuma")
{
	alert("hello bears");
}
```
not operator applies as usual  

### Javascript in HTML
To link a Javascript file in an html file:
```html
<body>
	<h1>Javascript in HTML</h1>
	<script type="text/javascript" src="script.js">
	</script>
</body>
```
We put the Javascript at the bottom of the body because the browser can't display while waiting for Javascript. Since we want the audience to see our Javascript file, we should put the Javascript link at the bottom of the body.

### Javascript Function
Can declare functions two ways:
#### Function Declaration
```javascript
function functionName(a, b){
	// perform action on a and or b
	// return statement
}
```
#### Function Expression
```javascript
var functionName2 = function functionName(a, b){
	// perform action on a and or b
	// return statement
};
```

### Arrays
```javascript
var list = ["tigers", "cat", "bear", "bird"];

console.log(list[1]);
```
Can have an array of functions:
```javascript
var functionList= [function apple(), function banana()];
```
Can have a mixed array (not advised)
```javascript
var mixedList = ["apples", 3, undefined, true, function apple()];
```
Array within an array:
```javascript
// array within a array
var list = [
	["tiger", "cat", "bear", "bird"]
];
// returns bear
console.log(list[0][2]);
```
Array acts like a deque list I guess?
```javascript
var list = ["tiger", "cat", "bear", "bird"]
list.shift();
// array is now: cat, bear, bird

list.pop();
// array is now: cat, bear

list.push("elephant");
// array is now: cat, bear, elephant

var newlist = list.concat(["bee","deer"]);
// array is now: cat, bear, elephant, bee, deer

newlist.sort();
//

```

### Javascript Objects
```javascript
var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells: ["magic", "shazam", "boo"],
	shout: function() {
		console.log("AHHHHH");
	}
};

// to access the data in the objects:
console.log(user.name);

// How to add properties to an object?
user.favoriteFood = "spinach";

// now user object has the following:
// user (name: name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	favoriteFood = "spinach")

// change a data member in the object
user.isMarried = true;

// now, user.isMarried will return true

// access an element in a list in a object
consol.log(user.spells[1] ); // returns "shazam"

// call a method inside an object
user.shout(); // returns "AHHHH"

// can have a list of objects
var list = [
	{
		username: "andy"
		password: "1234"
	},
	{
		username: "jess",
		password: "123"
	}
];

// can return a data member in an object in a list
console.log(list[0].username); // returns "andy"
```
Can have an empty object and an empty list
```javascript
user2 = {}; // returns {}

list2 = []; // returns []
```
NULL objects are __completely__ empty. 
```javascript
var emptyObj = {};

var nullObj = null; // returns null

nullObj.name = "Andy"; // this is not possible
emptyObj.name = "Andy"; // this is possible
```

### Loops
```javascript
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];
for (var i = 0; i < todos.length; i++)
{
	todos[i] = todos[i] + "!";
}
```
Popping items of an array
```javascript
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];
var todosLength = todos.length;
for (var i = 0; i < todosLength; i++)
{
	todos.pop();
}
```
While Loops
```javascript
var cnt = 0;
while (cnt < 10)
{
	console.log(cnt);
	cnt++;
}

var cnt2 = 0;
do {
	console.log(cnt2);
	cnt2--;
} while (cnt2 > 10);
```
Using .forEach
```javascript
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];
todos.forEach(function(todo, i)){
	console.log(todo,i);
}
```
```javascript
var todos = [
	"clean room",
	"brush teeth",
	"exercise",
	"study javascript",
	"eat healthy"
];
function logTodos(todo, i) {
	console.log(todo,i);
}
todos.forEach(logTodos);
```