// this is the JavaScript file

var tasks= [];
function toggelFinished() {
	document.getElementById("tasks").innerHTML = "true";
	 
}

function addNewTask() {
	alert("funkar");
}



function clear(){
    alert("funkar också");
}




$("#newTaskButton").click(addNewTask);
$("#removeButton").click(clear);