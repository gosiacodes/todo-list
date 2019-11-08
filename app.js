// this is the JavaScript file

/*
The task objects have the following structure:
{
	task: "Task description",
	finished: false
}
*/

var tasks= [];
function toggelFinished() {
	document.getElementById("tasks").innerHTML = "true";
	 
}

function addNewTask() {
	document.getElementById("par").innerHTML = "funkar";
}








$("newTaskButton").click(addNewTask);