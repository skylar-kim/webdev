# Notes for HTML5

### All HTML Files have the following:
```html
<!DOCTYPE html>
<html>
	<head>
		<title>My First Website!</title>
	</head>
	<body>
		Hello world!
	</body>
</html>
```
Title: Shows up in the tab 
Body: whatever shows up in the webpage

### Tags
Avoid using `<b></b>` to bold words because it's not supported by mobile phones or certain viewing modes. 
Instead, use `<strong></strong>` to bold words and `<em></em>` to italicize words. 

### Lists
Ordered List: To make an ordered list, use the `<ol></ol>` tag
```html
<ol>
	<li>one</li>
	<li>two</li>
	<li>three</li>
</ol>
```

Unordered List: To make an unordered list, use the `<ul></ul>` tag
```html
<ul>
	<li>rilakkuma</li>
	<li>korilakkuma</li>
	<li>kaoru</li>
</ul>
```

### Self Closing Tags
Self closing tags don't have a closing tag. 
For example, tags like `<br>` and `<hr>` don't have closing tags.

### Adding Images
To add images, follow the following format:
```html
<img src="smiley.gif">
```
Attribute: an attribute is a special property that is attached to a specific tag. An attribute always has a value assigned to it. 
ie. src is an attribute
alt = specifies an alternate text for an image

### Anchor Tag
An anchor tag `<a href=""></a>` to hyperlink a text so that when you click it, the link takes you to another website. 

### HTML Forms
Add a box to fill out:
```html 
<input type="text" >
``` 
Add a box to fill out an email address (and make it required):
```html 
<input type="email" required>
``` 
Add a box to fill out birthday:
```html
<input type="date">
```
Add a radio button and make it part of a "family":
This makes it so that only one of the radio buttons can be selected.
The following creates 3 radio buttons that are part of the "gender" family of radio buttons. 
```html 
<input type="radio" name="gender">Male<br>
<input type="radio" name="gender">Female<br>
<input type="radio" name="gender">Other<br>
```
Create a Checkbox:
```html
<input type="checkbox">
```
Create a submit button:
The submit button default displays "Submit" but here it is changed to "Register!" 
```html
<input type="submit" value="Register!">
```
Create a button to reset all fields
<input type="reset">

### div and span
`<div></div>` and `<span></span>` are tags that are used as containers when we want to add style or specific functionalities later. 
