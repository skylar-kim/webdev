# React
React: a tool to build predictable websites and have multiple people working on it at the same time.  
React can be used with mobile devices, VR apps, desktop apps, anywhere that has a view, React can be used.  

### Thinking In Components
Combine lego blocks to create your website.  
For example:  
1. Atoms: icons, little small indivisible elements  
2. Molecules: combines atoms to add some functionality  
3. Organisms: combination of molecules for a bigger functionality  
4. Templates: combination of organisms  
5. Pages: page of your app  
If you think in components, you can reuse them on multiple pages. Makes things modular.  
React doesn't need to know how the rest of the page is structured, by reducing dependencies on other parts of the website, makes everything easier.  

### One Way Data Flow
Data flows from top to bottom, never the other way around. If the parents have a change, then only the children know about the change. Based on the parent's change, then the children will act accordingly. 

### Virtual DOM
Important Concept: Minimize the amount of DOM manipulation that we do.  
React Bot creates the Virtual DOM: Javascript object that just describes the current state of the website. The react bot will automatically make changes to the DOM in the most optimal way possible. Virtual DOM is just a copy of the DOM and React, underneathe the view, changes the view. 

### React Ecosystem:
There's a lot of tools that work with React. 

### Updating React Versions
If a project is using an old version react, all you need to do is go into the package.json file, change the version number, and then in the terminal, run `$ sudo npm install`

### React-DOM
'react-dom': renders to websites
'react-native': renders to mobile devices

### JSX
Part of the React is that it allows you to write HTML-like syntax in Javascript.  
Why this is important: 
1. The separation of concerns is done because React has components.  
2. Underneath the hood, the "HTML tags" is not actual HTML tags. In the virtual DOM, React uses JSX to create their virtual DOM that they build based on what we give it to them.  
The reason why React is so fast is because it creates the objects (like h1, etc) in Javscript, and only changes what needs to be done in the DOM. 

### Props, or properties
In the index.js file, you can add properties.
For example, let's take a look at the following (btw, this is in Babel (Javascript)):  
__In index.js__: Within the Hello component, we can add props/properties. Within the property, we can say whatever we want. In this case, it is what we wrapped in {}. Here, we have given a "greeting" prop to "Hello".
```javascript
ReactDOM.render(
  <React.StrictMode>
    <Hello greeting={'Hello' + ' React Ninja'}/>
  </React.StrictMode>,
  document.getElementById('root')
);
```
__In Hello.js__: We now have access in 'Hello.js' to props. We can now say `{this.props.greeting}` and the website will show "Hello React Ninja". This object, which is 'Hello', has properties 'props' which is greeting.  
But now, we have access to whatever property and the property value we get from 'Hello'.
```javascript
class Hello extends Component {
	render(){
		return (
		<div className='f1 tc'>
			<h1> Hello World </h1>
			<p> {this.props.greeting} </p>
		</div> 
		)
	}
}
```
The above syntax is just a function essentially. The above syntax can be rewritten as the following:  
```javascript
const Hello = (props) => {
	return (
	<div className='f1 tc'>
		<h1> Hello World </h1>
		<p> {props.greeting} </p>
	</div> 
	);
}
```
Think of React as we're creating these functions that take parameters and these parameters which are given by giving attribtues and values, are just being rendered. 

### Robofriends Project
```javascript
return (
		<h1> Robofriends </h1>
		<div>
			<img alt='robots' src='https://robohash.org/test?200x200'/>
			<div>
				<h2>Jane Doe</h2>
				<p>jane.doe@gmail.com</p>
			</div>
		</div>
	);
```
Can't be returning multiple things. But only return one thing.  
Tachyons:
```javascript
const Card = () => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow'>
			<img alt='robots' src='https://robohash.org/test?200x200'/>
			<div>
				<h2>Jane Doe</h2>
				<p>jane.doe@gmail.com</p>
			</div>
		</div>
	);
}
```
The `'bg-light-green dib br3 pa3 ma2 grow'` means: background light green, display block, border 2, padding 3, margins 2, grow animation.  

__Export default vs not default__:  
The rule is, for components that are `export default ComponentName` aka they are a default, we can just do `import ComponentName from './ComponentName';` in the index.js file. However, for components that aren't export deafult, we need to destructure it.  
For example in index.js:
```javascript
import Card from './Card';
import {robots} from './robots';
```
The Card component has `export default Card;` in the Card.js file. The robots component doesn't have that, so we have to destructure it. If there was another variable in robot.js, then we need to include it in the destructure.  
For example;
```javascript
import Card from './Card';
import {robots, cats} from './robots';
```

__Destructuring continued__: 
```javascript
const Card = ({name, email, id}) => {

}
```
Here, we are receiving the props and destructuring the props. So before, we need to do props.name, props.email, props.id but we can just use name, email, id.  

__key id__: In CardList.js this is the following code from before:
```javascript
const CardList = ({robots}) => {
	const cardArray = robots.map((user, i) => {
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})
	return (
		<div>
			{cardArray}
	  	</div>
	);
}
```
The console will give us a warning because _each child in an array or iterator should have a unique key prop_. This is because when working with react, the way the virtual DOM works is, it keeps track of what all the cards are. But without having the 'key prop', if some of the cards gets deleted, React won't know which one is which, and then we have to change the entire DOM. 
```javascript
const CardList = ({robots}) => {
	const cardArray = robots.map((user, i) => {
		return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
	})
	return (
		<div>
			{cardArray}
	  	</div>
	);
}
```

### State
The description of your app. An object that describes your application.  
Props are simply things that come out of state. State are things that can change and affect our app. It usually lives in the parent component, which the parent component will pass the state to different child components.  

Explanantion of use in robofriends:  
The setup is the following: App.js is the parent, and SearchBox.js and CardList.js are the child components. Anytime the searchbox changes, onChange event is triggered (onChange is an HTML event), I'm going to call the function searchChange. The searchChange function is a prop (see App.js) is the onSearchChange function that is defined in App.js. That's how we communicate with the parent. 
App.js:
```javascript
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange(event) {
		console.log(event.target.value);
	}

	render () {
		return (
			<div className='tc'>
				<h1> ROBOFRIENDS </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots = {this.state.robots}/>
			</div>
			
		);
	}
}
```
SearchBox.js:
```javascript
const SearchBox = ({searchChange}) => {
	return (
		<div className='pa2'> 
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange = {searchChange}
			/>
		</div>
		
	);
}
```
__Possible error__: TypeError: Cannot read property 'state' of undefined. ZTM says the rule of thumb is: Anything that comes from React (constructor, render, etc), anytime you make your own methods, use the syntax below (in onSearchChange). The arrow function syntax makes sure that the `this` value is according to where it was created, which is the "App".
```javascript
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState();
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log(filteredRobots);
	}

	render () {
		return (
			<div className='tc'>
				<h1> ROBOFRIENDS </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots = {this.state.robots}/>
			</div>
			
		);
	}
}
```
In order to __update the state__, do the following:
```javascript
onSearchChange = (event) => {
	this.setState({searchfield: event.target.value});
	const filteredRobots = this.state.robots.filter(robots => {
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
	console.log(filteredRobots);
}
```

### Building a React App 4
__Smart Component__: App.js has a state, a piece of data that describes our app, and they are called smart components. Usually has the class syntax.  
__React Lifecycle Methods__: methods that we can use in our programs. They are called lifecycle hooks because when we run these methods, it will automatically trigger when the app gets loaded on the website.  
(https://reactjs.org/docs/react-component.html)
1. Mounting: When the website is refreshed, the app component (App.js) gets mounted into the `document.getElementById('root'));`. In the index.html file, our Web page is nothing but a `<div id='root'></div>`. When we "mount" a component, we are replacing the root and adding our entire app. Mounting is the start of the app. When we are mounting, we hit the lifecycle hooks which are: `constructor(), componentWillMount(), render(), and componentDidMount()` in that order.  
`constructor()`: Does this component have a constructor? Yes, run the piece of code. If not, go to `componentWillMount()` and so on and so forth. 

2. Updating: Whenever a component changes. For example in Robofriends: when we search something, the CardList component gets re-rendered because we have new info/the function receieves new inputs. Within those components, we can add the following methods:  
`componentWillReceiveProps()`  
`shouldComponentUpdate()`  
`componentWillUpdate()`  
`render()`  
`componentDidUpdate()`  
3. Unmounting: component is removed from a page.  
Robofriends example: if we change to a different page, the component will unmount.  

For example (App.js):
```javascript
class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
		console.log('constructor');
	}

	componentDidMount() {
		this.setState( {robots: robots})
		console.log('componenetDidMount');
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value});
	}

	render () {
		const filteredRobots = this.state.robots.filter(robots => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		console.log('render');
		return (
			<div className='tc'>
				<h1 className='f1'> ROBOFRIENDS </h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<CardList robots = {filteredRobots}/>
			</div>
			
		);
	}
}
```
In the console it will print out:
1. constructor: ran first
2. render: ran second
3. componentDidMount: ran third (just like the documentation)
4. render: why did render run again? Because we created the constructor, ran the render, and then upadted the state in componentDidMount(). Because we updated the state - every time the state changes, we go to the lifecycle, it's updating and runs render() again. Because the state.robots goes from an empty array to a robot's list, render gets re-run and the virtual DOM notices the change and repaints the web browser to include the robots. 


















