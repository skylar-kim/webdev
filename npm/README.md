# NPM
NPM(Node Package Manager): created for developers to share JS code they wrote. can search for packages, located in NPM registry. Anyone can submit packages. Packages contain: package.json file + js file. Use different packages to add functionality to your project.  
Benefits: get expertise from others
Cons: not all packages are good code, adding more bytes to the project  
Yarn: tool to grab things from NPM registry (both Yarn and NPM are similar)  

### Types of Packages
1. Front End: packages to use on the browswer (JQuery from NPM, etc), 
2. Back End: packages that you can use on Node.js 
3. packages that give you new commands
Manage dependencies with package.json file

### How to initialize a JSON file
In the terminal, cd to the directory you are working in, and run the following: `$ sudo npm init`.  
After you run that, then package.json will show up in the directory you are working in. 

### What is JSON?
JSON is a file format.

### Installing NPM packages locally vs globally
__Local installation__: if you install locally into a directory, that package will only run in that project. 
__Global installation__: -g, can use the package outside of that folder, can run it everywhere (on your terminal)

### What is the purpose of package.json file?
Even if the github repo doesn't have the node_modules folder like the one in this folder, anyone can look at the package.json file to know what are the package dependencies. Then they can run `$ npm install` and get all the packages they need.  
You will never see node_modules folder because they get big. 

### NPM Scripts
NPM scripts (in package.json) allow you to run commands from package.json file. 

### live-server
Installation: `npm install -g live-server`  
Note: There will be an `Error: EACCESS: permission denied` error. If you don't have correct permissions, you have to run with `sudo`.  
In your package.json file, nothing will change because we installed the package globally.  
__What does live-server do?__ If you run live-server while in the backgroundgenerator folder, it will automatically load the backgroundgenerator project.  
__What is happening?__ live-server creates a fake server to watch out for the changes that happen to the project. 

### lodash
lodash: extension of javascript
Installation: `npm install lodash`  
In the package.json file, there is a new line:
```json
"dependencies": {
	"lodash": "version number"
}
```
And also, there will be a node_modules folder that will be created, with lodash installed.  
If we install any package locally, the package will be added to our dependecies. All the packages live under the node_modules folder.  
__To check if lodash is working:__  
There are two ways to get lodash:  
1. Download browserify (a module bundle) globally: `$ sudo npm install -g browserify`.  
2. In script.js file: 
```javascript
var _ = require('lodash');
```
3. In terminal: `$ browserify script.js > bundle.js`. A bundle.js file will be made. It has created for us a bundle file that adds what we want so that the browser understands it. 
4. In the index.html file, must change the javascript file to bundle.js. 

### Semantic Versioning
For example: 4.17.4
Right most number: patch release - bug fixes
Middle number: minor release - new features, but no major changes
Left number: major release - might be pretty different from version 3, and might break websites that depend on version 4.  



### Why NPM is useful:
Let's say there is a new person working at the company, as long as the new person does `npm install` and there is a package.json file, all of the dependencies will get downloaded.  
There will be no __node_modules__ folders on github repos because all the packages are listed in the package.json file.  

## Dev dependencies:
Packages that are only needed for development and testing, will never be shipped to the website for the consumer

### npm run test
`npm run test` If this is run, there will be an error: `Error: no test specified` because:
npm scripts allow you to do commands from package.json file.  
For example, instead of having to type: `$ browserify script.js > bundle.js` in the terminal, this can be written under the "scripts" in package.json:  
```json
"scripts": {
	"build": "browserify script.js > bundle.js && liveserver"
}
```
`$ npm run build`: you will update browserify and open a server

### Why update packages?
On github, if you don't update a package to the latest one, github will tell you there is a security issue, and tell you what version you need to upgrade to.  
(https://semver.npmjs.com/) If you copy the version number from github and paste it in to that website, it will tell you which packages I should be downloading. 




















