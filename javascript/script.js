// function sayHello() {
// 	console.log("Hello");
// }
// sayHello();

// var sayBye = function() {
// 	console.log("Bye");
// }

// sayBye();


// function sing(song) {
// 	console.log(song);
// }

// sing();

// sing("backstreets back alright");

// function multiply(a, b){
// 	return a*b;
// }

// console.log(multiply(5,10));

var list = ["tigers", "cat", "bear", "bird"];

console.log(list[1]);

var numbers = [1,2,3,4];

var booleans = [true, false, true];

var functionList= [function apple(), function banana()];

// this is not advised
var mixedList = ["apples", 3, undefined, true, function apple()];

// array within a array
var list = [
	["tiger", "cat", "bear", "bird"]
];
// returns bear
console.log(list[0][2]); 

var list = ["tiger", "cat", "bear", "bird"]
list.shift();
// array is now: cat, bear, bird
list.pop();
// array is now: cat, bear
list.push("elephant");
// array is now: cat, bear, elephant
list.concat(["bee","deer"]);
// array is now: cat, bear, elephant, bee, deer
