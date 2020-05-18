# CSS Grids

### CSS Grids 1
In order to use CSS Grids, must have a container around the elements you want to manipulate.
For example: There is a container around all the items.
```html
<body>
  <div class="container">
    <div class="zone green">🦊</div>
    <div class="zone red">🐰</div>
    <div class="zone blue">🐸</div>
  </div>
</body>
```
In the CSS File, give the class `.container` the property of `display: grid;` then the children will be part of the grid system.
For example: 
```css
.container {
    display: grid;
}
```
The most important part of CSS grid system is adding the following:
```css
.container {
	display: grid;
	grid-template-columns: 1fr 1fr 2fr;
}
```

`grid-template-columns` tells the page how many columns we want to use. 
Note: `grid-template-columns` can be specified with pixels, percentages, etc BUT the best tool to use is by specifying the __fr__.  
__fr__: fraction, the number indicates how many fractions are in that column
For example: There are three equal columns here.
```css
.container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}
```
For example: There are three columns here, the third column is 2x the size of the first and second column. 
```css
.container {
	display: grid;
	grid-template-columns: 1fr 1fr 2fr;
}
```

### CSS Grids 2
`grid-template-rows`: define the way the rows should look.
For example: The second row is twice as big as the first row. Since there is no specification for any of the following rows after the 2nd row, they are defaulted to take up `1fr`.
```css
.container {
	display: grid;
	grid-template-rows: 1fr 2fr;
}
```
`repeat(num, #fr)`: equal to typing out `1fr 1fr 1fr...`
For example:
```css
.container {
	display: grid;
	grid-template-rows: repeat(3,1fr);
}
```
__auto__ property: fill in the remaining space that there is left 
For example: Since there are two foxes, and the first column has the auto property, it will automaticall resize to fit the content.  
Also, because the entire layout is on a grid system, it will make sure that the element below will have the same size. 
```html
<body>
  <div class="container">
    <div class="zone green">🦊🦊</div>
    <div class="zone red">🐰</div>
    <div class="zone blue">🐸</div>
    <div class="zone yellow">🦁</div>
    <div class="zone purple">🐯</div>
    <div class="zone brown">🐭</div>
  </div>
</body>
```
```css
.container {
	display: grid;
	grid-template-column: auto 1fr 2fr;
}
```  

### CSS Grids 3
`justify-items: start`: aligns the contents in a grid items along the row axes  
`justify-items: end`: aligns the contents in a grid items along the row axes towards the end of the grid system.  
For example: The last item, 2fr, is justified to the end (so there is a big gap), and the middle item, 1fr, is justified to the end (so there is a gap). The first item, because its __auto__ (aka the size is according to its content), it doesn't move whether `justify-items` is start or end.  
The first item is already within the maxed space of the grid system. 
```css
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto 1fr 2fr;
    grid-template-rows: 1fr;
    justify-items: start;
}
```
`align-items`: aligns the contents in a grid items along teh column axes.  

#### The best method to create a grid system that is responsive:
Automatically adjusts to the size of the viewboard
``` css
.container {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 1fr;
}  
```










