# Bootstrap

### How to use Boostrap
To get started quickly, you can just copy and paste the boostrap code into your html file
[Bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

Add this to the `<head>`
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
```
Add this to the `<body>`
```html
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
```

To add components, look it up in the Boostrap website. 

### Overiding Bootstrap
If you want to override the features in the default Boostrap, make a CSS file and link it below the Boostrap link.

## Boostrap Grids
Bootstrap grids are split into 12 columns. 
```html
	<div class="container">
		<div class="row">
		    <div class="col col-sm-6 col-md-12 col-lg-12">
		      1 of 2
		    </div>
		    <div class="col col-sm-3 col-md-6 col-lg-12">
		      2 of 2
		    </div>
		    <div class="col col-sm-3 col-md-6 col-lg-12">
		      Extra
		    </div>
		 </div>
	</div>

```
What the above says is that:
#### When the window is small: 
split the container into 3 sections, with "1 of 2" taking up 6 columns, and "2 of 2" taking up 3 columns, and "Extra" taking up 3 columns
#### When the window is medium: 
"1 of 2" takes up 12 columns, and "2 of 2" and "Extra" goes to the next line and takes up 6 columns each
#### When the window is large: 
"1 of 1" takes up the entire 12 columns. "2 of 2" and "Extra" both goes to newlines and takes up 12 columns each. 

### Perfect Full Page Background Image
From [CSS Tricks](https://css-tricks.com/perfect-full-page-background-image/)
```css
html { 
  background: url(images/bg.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
```
This ensures that the image is scalable and the center is always centered.
