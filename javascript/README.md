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
```javascript
function functionName(a, b){
	// perform action on a and or b
	// return statement
}
```
```javascript
var functionName2 = function functionName(a, b){
	// perform action on a and or b
	// return statement
}
```