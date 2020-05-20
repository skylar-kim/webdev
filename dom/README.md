# DOM

### What is the DOM?
Document Object Model: when a web page is loaded, the browswer creates the DOM to allow us to modify the HTML and CSS. It's a Javascript object. 
We can use Javascript to talk to the DOM to modify the HTML and CSS. 
Web browswers allow us to modify the DOM through the document object. 
#### Parent object of Document object
The parent object of Document object is the Window. 
Window has objects like document, alert, etc. 

### What is the Javascript Engine?
Each browswer has a Javascript Engine (Chrome has V8 engine, Safari has Nitro). 

### How everything works:
The web browswer has a window object.   
The window object has the document object (along with other objects).  
The document object specifies what should get displayed.  

### DOM Selectors
DOM Selectors: select diferent elements so we can manipulate them.  
`document.getElementsByTagName()`: accepts a tag name (ie. h1). 
`document.getElementsByClassName()`: accepts a class name and returns the second element
`document.getElementsById()`: returs the element that is associated with the id.
#### Grabbing Elements 
`document.querySelector`: selects the first item that it finds
`document.querySelector("")`: returns the full content of the element inside the ""
`document.querySelectorAll()`: select all of the elements. For example, if there are 6 li elements, then it will select and return all 6. If there are multiple elements in the arguments, will return everything.  
```javascript
document.querySelectorAll("li, h1")
// returns [h1,li,li,li,li,li] if the document has 1 h1 and 5 li's 
```
__Tip__: use `querySelector` and `querySelectorAll` instead of `getElement...`

`getAttribute`: get the attributes of the elements
```html
<body>
	<h1>Shopping List</h1>
	<ul>
		<li random="23">Notebook</li>
		<li>Jello</li>
	</ul>
</body
```
```javascript
document.querySelector("li").getAttribute("random");
// select "li" element in the HTML file, then get whatever attribute that is called "random"

````
`setAttribute`: set the attribute  
For example: let's say we want to change the "random" attribute. 
```html
<body>
	<h1>Shopping List</h1>
	<ul>
		<li random="23">Notebook</li>
		<li>Jello</li>
	</ul>
</body
```
```javascript
// set the random attribute to 100
document.querySelector("li").setAttribute("random", "1000");
// returns the full content with the changed attributes
document.querySelector("li");
// <li random="1000">Notebook</li>
````

### Changing Styles
`style.{property}`: access and set the CSS style
```javascript
document.querySelector("h1").style.background = "yellow";
// changes the background color of h1 
````
A Better Way to Change Styles
`className`:
```javascript
var h1 = document.querySelector("h1");
h1.className = "coolTitle";
// changes the style class of h1 to something very different
```
```html
<body>
	<h1>Shopping List</h1>
	<ul>
		<li class="bold" random="23">Notebook</li>
		<li>Jello</li>
	</ul>
</body
```
```javascript
document.querySelector("li").classList;
// returns the list of classes that gives us methods that we can use
document.querySelector("li").classList.add("coolTitle");
document.querySelector("li").classList.remove("coolTitle");
document.querySelector("li").classList.add("done");
// class done crosses off words
```

### Bonus
inner HTML (Dangerous)
```javascript
document.querySelector("h1");
document.querySelector("h1").innerHTML = "<strong>!!!!";
// this is not advised
```
parentElement & children:  
For example
```javascript
document.querySelectorAll("li")[1]; // returns Jello
document.querySelectorAll("li")[1].parentElement; // get the parent element, <ul></ul>
document.querySelectorAll("li")[1].parentElement.parentElement; // get the parent of the parent of li, which is the <body></body>
document.querySelectorAll("li")[1].parentElement.parentElement.children; //get the children of body
```

#### Important to CACHE selectors in Variables
```javascript
// instead of doing this
document.querySelectorAll("li")[1];
document.querySelectorAll("li")[1];
document.querySelectorAll("li")[1];
document.querySelectorAll("li")[1];
// capture the data in a variable to prevent taking up memory
var li1 = document.querySelectorAll("li")[1];
```

### DOM Events
There are events that a Web browser allows us to "listen" to:  
If we have a button, we can "listen" for an event:
```javascript
var button = document.getElementsByTagName("button")[0];

button.addEventListener("click", function() {
	console.log("CLICK!");
}) 
```
Remember to add the [0] to access the first element in the array because `getElementsByTagName` returns an array of (in this case) buttons. 

### Callback Functions
Event Listener Syntax:
```javascript
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
```
Notice how the function calls don't have a parantheses ():
```javascript
button.addEventListener("click", addListAfterClick());
input.addEventListener("keypress", addListAfterKeypress(event));
```
This is called a __callback function__.  
When those two javascript lines run, we __do not want addListAfterClick to run__ because we want to run it AFTER the event happens. When the event happens (ie. a click) then the function is automatically run every time the click happens.  
We are passing a reference to the function without running it. 



























