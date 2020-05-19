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


