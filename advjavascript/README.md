# Advanced Javascript

### Scope
Scope: variable access, what variables do I have access to when a code is running?  
By default in JS, you are in the 'root scope' which is the window object. 

### Javascript Conditionals
#### Ternary Operator
```javascript
condition ? expr1 : expr2;
```
```javascript
function isUserValid(bool) {
	return bool;
}
var answer = isUserValid(true) ? "You may enter" : "Access Denied";
var automatedAnswer = "Your accoutn is" + (isUserValid(false) ? "1234" : not available) // prints out "Your account # is not available"
```
#### Switch Statement
```javascript
function moveCommand(direction) {
	var whatHappens;
	// check direction
	switch(direction) {
		// if direction === forward
		case "forward":
			whatHappens = "you encounter a monster";
			break;
		case "back":
			whatHappens = "you arrived home";
			break;
		case "right":
			whatHappens = "you found a river";
			break;
		case "left":
			whatHappens = "you run into a troll";
			break;
		default:
			whatHappens = "please enter a valid direction";
	}
	return whatHappens
}
```

### Javascript Variables

#### let (new in ECMAScript 6) & const (new in ECMAScript 6)
```javascript
const player = "bobby";
let experience = 100;
var wizardLevel = false;

if (experience > 90) {
	var wizardLevel = true;
	console.log("inside", wizardLevel); // returns true
}
console.log("outside", wizardLevel); // returns true
```
```javascript
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if (experience > 90) {
	let wizardLevel = true;
	console.log("inside", wizardLevel); // returns true
}
console.log("outside", wizardLevel); // returns false
```
Note: with variables, only able to create scope inside of a function, but couldn't create scope inside an if statement.  
However, with `let` we are able to create scope inside if statements. Therefore, the only way for `wizardLevel` to return true is __if `wizardLevel` is accessed within the if statement__.  

Cannot reassign the value of a `const`: this is helpful because it prevents bugs. For example, a function could be a constant. 
```javascript
const a = function() {
	console.log(a);
}
```
Nobody can assign something else to a.  
Use `const` if using a variable that will not change. Note: if assigning an object as a constant, cannot reassign the variable. However, when reassigning a data member of that object, it is possible.  
```javascript
const obj = {
	player: "bobby",
	experience: 100,
	wizardLevel: false,
}

obj = 5; // will not run

obj.wizardLevel = true; // will run and reassign wizardLevel to true. 
```
Use `let` if using a variable that will change. 

### Destructuring
```javascript
const obj = {
	player: "bobby",
	experience: 100,
	wizardLevel: false,
}

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

// this line does the same thing as the first two lines in the code block above. 
const { player, experience } = obj;
let { wizardLevel } = obj;
```
#### Dynamic Assignment:
```javascript
const name = "Jon Snow";

const obj = {
	[name]: 'hello',
	[1 + 3]: 'hihi'
}

// in the console, when asking for obj, it will display the following:
// {3: 'hihi', Jon Snow: "hello"}
```
#### Object Properties
```javascript
const a = "Sky";
const b = true;
const c = {};

const obj = {a, b, c};
```
#### Template Strings
If you use backticks, can use double quotes or single quotes anywhere you want
```javascript
const greeting = ``;
const name = "Sally";
const age = 34;
const pet = 'horse';

const greeting2 = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
```
#### Default Arguments
This is important because if the function call doesn't have arguments, the function won't fail because there are default arguments. 
```javascript
function greet (name='', age=30, pet='cat') {
	const greeting2 = `Hello ${name} you seem to be ${age-10}. What a lovely ${pet} you have.`;
}
// prints out:
// Hello  you seem to be 20. What a lovely cat you have. 

```
#### Symbol
Symbols create a unique type. Even though they might look the same, they are different so there's never going to be any conflict. 
```javascript
let sym1 = Symbol();
let sym2 = Symbol('foo');
let sym3 = Symbol('foo');


return sym2 === sym3; // returns false
```
#### Arrow function 
Shorthand for writing functions. The following are the same thing. 
```javascript
function add(a,b) {
	return a+ b;
}

const add = (a,b) => a + b;
```













