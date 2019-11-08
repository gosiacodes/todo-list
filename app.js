// this is the JavaScript file

/* The task objects will have the following structure:
{
	taskDescription: "The task at hand",
	finished: false
}
*/

var tasks = [];

function toggelFinished() {
    'use strict';
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

/*$(document).ready(function(){
    $("#new-task-button").click(function(){
        $("#par").text(function(i, newTask){
            newTask = $("#new-task").text();
            return newTask;
        });
    });
});*/



function addNewTask() {
    'use strict';
    document.getElementById("par").innerHTML = "det funkar";
}

function clear() {
    'use strict';
    alert("funkar också");
}


$("#new-task-button").click(addNewTask);
$("#remove-button").click(clear);