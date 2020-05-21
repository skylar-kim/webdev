// scope

// Root scope (window)
var fun = 5;

function funFunction() {
	// child scope
	var fun = "hellooo";
	console.log(1, fun);
}

function funerFunction() {
	// child scope
	var fun = "Byee";
	console.log(2, fun);
}

function funestFunction(){
	// child scope
	fun = "Byeeeeee";
	console.log(3, fun);
}

console.log(4, fun);
funFunction();
funerFunction();
funestFunction();