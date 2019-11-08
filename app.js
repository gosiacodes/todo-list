// this is the JavaScript file

/* The task objects will have the following structure:
{
	taskDescription: "The task at hand",
	finished: false
}
*/

var tasks= [];

function toggelFinished() {
	document.getElementById("tasks").innerHTML = "true";
	 
}

function addNewTask() {
	alert("funkar");
}








$("newTaskButton").click(addNewTask);