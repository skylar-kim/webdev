var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var items = ul.getElementsByTagName("li");
var deletebutton = document.getElementsByClassName("delete");

// adding items
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var newdeletebutton = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(newdeletebutton);
	newdeletebutton.appendChild(document.createTextNode("Delete"));
	ul.appendChild(li);
	newdeletebutton.addEventListener("click", removeParent);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// doing strikethroughs

// get the event target
function getEventTarget(e) {
	// use e if it exists or e will be equal to window.event
	e = e || window.event; 
	return e.target || e.srcElement;
	
}
// var ullength = document.querySelectorAll("li")
// for (var i = 0; i < ullength.length; i++)
// {
// 	ullength[i].addEventListener("click", toggleFunc);
// }
// function toggleFunc()
// {
// 	ullength[i].classList.toggle("done");
// }
// click on a list item and it toggles the strikethrough
ul.onclick = function(event) {
	var target = getEventTarget(event);
	target.classList.toggle("done");
}

function removeParent(evt) {
		// var parent = deletebutton[i].parentElement;
		// delete parent;
		evt.target.removeEventListener("click", removeParent);
		evt.target.parentNode.remove();
}

// deleting items
for (var i = 0; i < deletebutton.length; i++)
{
	deletebutton[i].addEventListener("click", removeParent);
}


















