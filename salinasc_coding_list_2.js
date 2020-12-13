var string = [];

const list = document.querySelector("#list");
const listTodo = document.querySelector("#listTodo");

function deleteTodo(event, count){
	// I need to determine which todo item was clicked

	string.splice(count, 1);

	const listItems = string.map(alist =>`
	<li>${alist.value}<button onclick="deleteTodo(event, ${alist.count})">x</button><button onclick="complete(event)">completed</button></li>`
	);
	
	// Add the mapped output to the html
	listTodo.innerHTML = listItems.join("");
}

function complete(event)
{
	console.log(event);
}

document.querySelector('#label').addEventListener("submit", function(event) {
	event.preventDefault();	

	let listValue = list.value;
	string.push({value: listValue, complete: false, count: string.length});
	const listItems = string.map(alist =>`
	<li>${alist.value}<button onclick="deleteTodo(event, ${alist.count})">x</button><button onclick="complete(event)">completed</button></li>`
	);
	
	// Add the mapped output to the html
	listTodo.innerHTML = listItems.join("");
});



