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