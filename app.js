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
    $(document).addNT(function(){
        var newTask = $("#new-task").text();
        $("#par").text(function(){
            return newTask;
        });
     });
}

function clear(){
    alert("funkar också");
}




$("#new-task-button").click(addNewTask);
$("#remove-button").click(clear);