# Advanced CSS

### Flexbox
[Great web resource for Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
CSS Flexible Box Layout is a CSS3 web layout model. 
For example: This applies the flexbox to the 6 pictures in the html file. 
flex-wrap: allows the items to wrap as needed
justify-content: defines the alignment along the main axis (usually horizontal)
```css
.container {
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}
```
```html
<body>
	<h1>Life in the Wild</h1>
	<div class="container">
		<img src="https://static.pexels.com/photos/52500/horse-herd-fog-nature-52500.jpeg">
		<img src="https://static.pexels.com/photos/66898/elephant-cub-tsavo-kenya-66898.jpeg">
		<img src="https://static.pexels.com/photos/213399/pexels-photo-213399.jpeg">
		<img src="https://static.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg">
		<img src="https://static.pexels.com/photos/133459/pexels-photo-133459.jpeg">
		<img src="https://static.pexels.com/photos/50988/ape-berber-monkeys-mammal-affchen-50988.jpeg">
	</div>
</body>
```

### CSS 3
#### Making a image move when hovering over
```css
img{
	width: 450px;
	height: 300px;
	margin: 10px;
	transition: all 1s;
}

img:hover {
	transform: scale(1.1);
}
```
Image will transition when an action is taken upon, and all properties will transition over 1 sec.
When you over, the image will transformation by scaling by 1.1.

### Responsive UI
No matter what size the screen is, the website still looks good and everything scales well. 