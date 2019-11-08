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
	document.getElementById("par").innerHTML = "det funkar jupii"
}



function clear(){
    alert("funkar också");
}




$("#newTaskButton").click(addNewTask);
$("#removeButton").click(clear);