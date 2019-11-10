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

    var task, taskText, listItem;

    // Read input, create task object and add it to the tasks array
    taskText = $("#new-task").val();
    task = {
        taskDescription: taskText,
        finished: false
    };
    tasks.push(task);

    // Create list item and insert it in the DOM
    listItem = "<li>" + taskText + "</li>";
    $("#task-list").append(listItem);

    // Empty the input field
    $("#new-task").val("");


    console.log(taskText);

}

function clear() {
    'use strict';
    alert("funkar också");
}


$("#new-task-button").click(addNewTask);
$("#remove-button").click(clear);