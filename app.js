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
    // document.getElementById("tasks").innerHTML = "true";

    $(this).toggleClass("strike-through");

    console.log("toggle");
    console.log(this);
}

function addNewTask() {
    'use strict';
    // document.getElementById("par").innerHTML = "det funkar";

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

    // Find the list item and add a click function
    listItem = $("#task-list li:last");
    listItem.click(toggelFinished);
    // console.log(listItem);

    // Empty the input field
    $("#new-task").val("");
}

function clear() {
    'use strict';
    alert("funkar också");
}


$("#new-task-button").click(addNewTask);
$("#remove-button").click(clear);