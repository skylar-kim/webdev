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

### Advanced Functions
The word `function` is no longer used.  
We change this syntax:
```javascript
function first() {
	var greet ='Hi';
	function second() {
		alert(greet);
	}
	return second;
}
var newFunc = first();
newFunc();
```
To:  
```javascript
const first = () => {
	const greet = 'Hi';
	const second = () => {
		alert(greet);
	}
	return second;
}

const newFunc = first();
//const newFunc = const second = () => {
//	alert(greet);
//}
newFunc();
```
Variables created inside functions (including parameters) are local to the function. 
Every time you run the first function, the block of code gets executed and the 'greet' variable gets created every time. 

#### Closures: Child scope always has access to the parent's scope
A function ran, the function executed, it's never going to execute again, __but it's going to remember that there are references to those variables so the child scope always has access to the parent scope__.
Parent don't have access to their children scope. 

### Currying
The process of converting a function that takes multiple arguments into a function that takes them one at a time.  
```javascript
const multiple = (a,b) => a * b;
const curriedMultiple = (a) => (b) => a*b;

// in console: a = 3, b = 4
curriedMultiple(3)(4);
// returns 12
```
Why? __The function becomes more extensible.__
For example: Anytime you want to multiple something by five, you can do the following:
```javascript
const multipleBy5 = curriedMultiply(5);
multipleBy5(10); // returns 50
multipleBy5(11); // returns 55
```
### Compose
Act of putting two functions together to form a third function where the output of one function is the input of the other. 
```javascript
const compose = (f, g) => (a) => f(g(a)); // a = 5
const sum = (num) => num + 1;
compose(sum, sum)(5);
// returns 7
```
Tips: Avoid side effects and do functional purity

### Side Effects
Any functions that happen inside of the function that we don't know anything about. If it interacts or reads or writes to an external variable or `console.log` then that is a side effect. 
For example: we want to avoid the following because the function is changing what's outside of the function. 
```javascript
// this is a side effect example
var a = 1;
function b() {
	a = 2;
}
```
### Functional Purity
Want to avoid side effects and always want to return a value, no undefined.  
By avoiding side effects and always returning, we create __deterministic__ code. 
A program is __deterministic__ (repeatable) if it produces the very same output when given the same input no atter how many times it is run. Non-deterministic code is hard to test an debug, since bugs and specific configuration cannot be easily reproduced. 

### Arrays
```javascript
const array = [1,2,10,16];
const double = [];
const newArray = array.forEach((num) => {
	double.push(num * 2);
})

console.log(newArray)
```

### Map 
```javascript
const array = [1,2,10,16];
const mapArray = array.map(num => {
	return num*2;
});
// returns an array of [2,4,20,32]
```
#### What's the difference between map and forEach?
Whenever you want to do a simple look and take some action on an array, you want to use a map instead of a forEach.  
The forEach may not return anything.
Map has a restriction on the operation: _-map expects the operation to return an element. -_  
Theoretically, the "side effects" are gone, and because there is a return statement required, the function is deterministic.  
Therefore with a .map method, we have created a pure function.  
Another important note: we are not changing the original array. We are making a new copy of the array therefore never mutating the original array.
```javascript
// shorthand version
const mapArray = array.map(num => num*2);
```
### Filter
```javascript
const array = [1,2,10,16];
// return a filterArray that only contains elements that meet a certain condition (ie. greater than 5)
const filterArray = array.filter(num => {
	return num > 5;
})
```
### Reduce
```javascript
const array = [1,2,10,16];
const reduceArray = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 0)
// returns 29
const reduceArray2 = array.reduce((accumulator, num) => {
	return accumulator + num;
}, 5)
// returns 34 because starting value
```

### Advanced Objects

#### Reference Type
```javascript
var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2; //returns true
object1 === object3; //returns false

object1.value = 15;
object2.value; // returns 15
object3.value; // returns 10
```
Reference Type: not defined by the prog languages, they are created by the programmer.  
In the previous example, __object2 is a reference of object1.__ So whatever changes made to object1 reflect in object2. (I guess in memory, object2 points to object1).  
object3 creates a new object.

#### Context vs Scope
Scope is created when we see curly brackets {}
```javascript
function b() {
	let a = a;
}
// this will not work because a only lives in the function
console.log(a); 
```
How is context different: context tells you where we are within the object. 
```javascript
console.log(this); // prints out all the contents of the window object
console.log(this === window); // returns true
```
__this__: what `this` is what is the object environment that we're in right now
```javascript
// this is equal
this.alert();
window.alert();
```
```javascript
function a() {
	console.log(this);
}
a(); // prints out the window object because we are in the window object right now. 

const object4 = {
	a: function() {
		console.log(this);
	}
}
object4.a(); // prints out object4 because 'this' refers to object4
```
#### Instantiation
Make a copy of an object and reuse the code.  
How to do instantiation:
```javascript
class Player {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}
```
Any time you want to access a property within the constructor, then use this.name.  
If you want to copy the Player class, then you do the following:  
Note: whenever you want to extend a class you want to use `super()` so tha you essentially have access to the Player class
```javascript
class Player {
	constructor(name, type){
		console.log('player', this);// returns player Wizard{} (this console.log statement will print first)
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}
}

// I want Wizard to extend whatever Player has
class Wizard extends Player{
	constructor(name, type) {
		super(name, type);
		console.log('wizard', this); // returns Wizard{name: "Merlin", "Healer"} (this console.log will print second)
	}
	play() {
		console.log(`WEEEEE I'm a ${this.type}`);
	}
}

const wizard1 = new Wizard("Merlin", "Healer");
const wizard1 = new Wizard("Harry", "Dark Magic User");

wizard1.play(); // returns WEEEEE I'm a Healer
wizard1.introduce(); // returns Hi I am Merlin, I'm a Healer

wizard2.play(); // returns WEEEEE I'm a Dark Magic User
wizard2.introduce(); // returns Hi I am Harry, I'm a Dark Magic User
```



