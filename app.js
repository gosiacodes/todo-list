// this is the JavaScript file

/* The task objects will have the following structure:
{
	taskDescription: "The task at hand",
	finished: false
}
*/

var tasks = [];

function toggelFinished() {
	document.getElementById("tasks").innerHTML = "true";
	 
}

function addNewTask() {
    var newTask = $("#newTask").text();
    $("#par").text(function ) {
        return newTask;
    }
    
    /*$("#par").text()
    document.getElementById("par").innerHTML = newTask;*/
}



function clear(){
    alert("funkar också");
}




$("#newTaskButton").click(addNewTask);
$("#removeButton").click(clear);