var string = [];

const list = document.querySelector("#list");
const listTodo = document.querySelector("#listTodo");

function deleteTodo(event, countlist){

	string.splice(countlist, 1);

	const listItems = string.map(alist =>`
	<li class="${alist.complete ? 'crossout' : ''}">${alist.value}<button onclick="deleteTodo(event, ${string.indexOf(alist)})">x</button><button onclick="complete(event,${string.indexOf(alist)})">completed</button></li>`
	);
	
	// Add the mapped output to the html
	listTodo.innerHTML = listItems.join("");
}

function complete(event, countlist)
{
	console.log(event);
	string[countlist].complete = true;

	const listItems = string.map(alist =>`
	<li class="${alist.complete ? 'crossout' : ''}">${alist.value}<button onclick="deleteTodo(event, ${string.indexOf(alist)})">x</button><button onclick="complete(event,${string.indexOf(alist)})">completed</button></li>`
	);
	
	// Add the mapped output to the html
	listTodo.innerHTML = listItems.join("");
}

document.querySelector('#label').addEventListener("submit", function(event) {
	event.preventDefault();	

	let listValue = list.value;
	string.push({value: listValue, complete: false});
	const listItems = string.map(alist =>`
	<li class="${alist.complete ? 'crossout' : ''}">${alist.value}<button onclick="deleteTodo(event, ${string.indexOf(alist)})">x</button><button onclick="complete(event,${string.indexOf(alist)})">completed</button></li>`
	);
	
	// Add the mapped output to the html
	listTodo.innerHTML = listItems.join("");
});



