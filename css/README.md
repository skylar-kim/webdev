# CSS: Cascading Style Sheets

### Basic CSS Form
```css
Selector {
	Property: value;
}
```
In order to link the html file to the css file, must have the following tag in the html file:
```html
<link rel="stylesheet" type="text/css" href="style.css">
```
href should equal the css file

### What Does Cascading Mean?
CSS takes the last input it receives for a specific selector. 

### Inline Styles
Original way to incorporate styles into HTML.
Within the element, say what style the element should be.

### CSS Order of Rules
Order matters because CSS will read the last line to add a property
#### .class: can put several elements under the same class. The class property can have any value we want
For example:
```html
<section>
    <h2>Home</h2>
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
  </section>
```
Then in the CSS file, you can apply a style to all the elements in that class by the following:
```css
.webtext {
	border: 5px dashed #F26680;
}
```
the "active" in the first <p> tag means that a 2nd class is created, and you can apply further properties
```css
.active {
	color: black;
}
```
#### id: similar to class, but can use same id only once
For example: 
```html
 <section>
    <h2>Home</h2>
    <div id="div1">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
    <div id="div2">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>  
 </section>
```
By separating the two groups of <p> tags into div1 and div2, you can apply different attributes to each group. div1 has a different background color than div2, but they have the same contents. 
```css
#div1 {
	background: #F2D8DC;
}
#div2 {
	background: #ECF2D8;
}
```
#### * : symbolizes all elements, usually found at the top of the css file
```css
* {
	text-align: right;
}
```
Will apply the property to all the elements, but if the elements have their own specificity. The element's specificity overrides the * 
#### element: just select the element to apply the property
```css
body {
	background-image: url(backgroundimage2.jpg);
	background-size: cover;
}
```
#### element, element: when you want both elements to have the same property
```css
h2,p {
	color: #F26671;
	text-align: center;
	border: 5px solid pink;
	cursor: pointer;
}
```
#### element1 element2: select all element2 that is inside element1
For example: since the following doesn't have any `<p>` in `<h2>`, there will be no properties applied to the `<p>` tags or the `<h2>` tag
```css
h2 p {
	color: #F26671;
	text-align: center;
	border: 5px solid pink;
	cursor: pointer;
}
```
```html
<section>
    <h2>Home</h2>
    <div id="div1">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
</section>
 ```
However, if we have a `<p>` inside a `<h2>`, then the CSS properties will apply. Remember, the CSS from above will only apply to the "homegnome" and not "Home".
```html
<section>
    <h2>Home<p>homegnome</p></h2>
    <div id="div1">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
</section>
```
#### element1 > element2: select all element2 that their parent is element1
For example: Since homegnome's parent tag is `<div>` and not `<h2>`, the following CSS style will not apply.
```css
h2 > p {
	color: #F26671;
	text-align: center;
	border: 5px solid pink;
	cursor: pointer;
}
```
```html
<section>
    <h2>Home
    	<div>
    		<p>homegnome</p>
    	</div>
    </h2>
    <div id="div1">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
</section>
```
#### element1 + element2: select any element2 that is after element1
For example: The CSS style will apply to "homegnome" because `<p>` is directly after the `<h2>Home</h2>`
```css
h2 + p {
	color: #F26671;
	text-align: center;
	border: 5px solid pink;
	cursor: pointer;
}
```
```html
<section>
    <h2>Home</h2>
    <p>homegnome</p>
    <div id="div1">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
</section>
```
#### :hover : when you hover your cursor over the element, the CSS style will apply.
```css
h2 + p:hover {
	color: #F26671;
	text-align: center;
	border: 5px solid pink;
	cursor: pointer;
}
``` 
#### :last-child : only the last child of each class will have the CSS style apply
For example: The following CSS will only apply to the last `<p>` of div1 and div2 (because the `<p>` belongs to the same class)
```css
.webtext:last-child {
	border: 5px dashed #F26680;
}
```
```html
<section>
    <h2>Home<p>homegnome</p></h2>
    <div id="div1">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
    <div id="div2">
      <p class="webtext active">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
      <p class="webtext">Lorem ipsum.</p>
    </div>
    
  </section>
```
#### :first-child : same thing as :last-child, just applies it to the first element

#### !important (not recommended): !important overrides any cascading rules 
For example: although the color green typically should apply to the `<p>` because of order, the !important overrides the rules and applies pink to all of the `<p>` in the html file
```css
p {
	color: pink !important;
}
p {
	color: green;
}
```
Not recommended though because it breaks the rules of cascading style sheets. 

#### Multiple Style Sheets
```html
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="style2.css">
```
If style2 has a different modification to an element, then the style2.css will "win over" the style.css.

#### What selectors win out in the cascade depends on:
-Specificity: the more specific something is, the more likely it will win out over the others
-Importance
-Order

#### Images in CSS
1. Insert image in html file
2. In CSS file, you can either make it float left or right, and then any text will shift either way around the image. 
3. However, if you want to have a text that won't "tag on" to the image, must do the following: 
```css
img {
	float: left;
}

footer{
	clear: both;
	text-align: center;
}
```
This is so that any text in the `<footer></footer>` will be separate and not be tagged onto the image. 