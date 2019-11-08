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

/*
function addNewTask() {
    $(document).ready(function(){
        $("#par").text(function(i, newTask){
            newTask = $("#new-task").text();
            return newTask;
        });
    });
}*/

$(document).ready(function(){
    $("#new-task-button").click(function(){
        $("#par").text(function(i, newTask){
            newTask = $("#new-task").text();
            return newTask;
        });
    });
});

function clear(){
    alert("funkar också");
}





$("#remove-button").click(clear);