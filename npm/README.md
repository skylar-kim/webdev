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
Local installation: if you install locally into a directory, that package will only run in that project. 
Global installation: -g, can use the package outside of that folder, can run it everywhere (on your terminal)

### What is the purpose of package.json file?
Even if the github repo doesn't have the node_modules folder like the one in this folder, anyone can look at the package.json file to know what are the package dependencies. Then they can run `$ npm install` and get all the packages they need.  
You will never see node_modules folder because they get big. 

### NPM Scripts
NPM scripts (in package.json) allow you to run commands from package.json file. 