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
.class: can put several elements under the same class. The class property can have any value we want
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
#id:

*
element
element, element
element element
element > element
element + element
:hover
:last-child
:first-child
!important (not recommended)