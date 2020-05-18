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
`grid-template-rows`: define the way the rows should look














