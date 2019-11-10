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



function rewriteTaskList() {
    var taskList;
    var listItem;
    console.log(tasks);

    // Find the unordered list
    taskList = $("#task-list");
    console.log(taskList);

    // Remove the previous list
    $("#task-list").empty();

    // Create the new list
    for ( var i = 0; i < tasks.length; i++) {
        // Create list item
        //if tasks[i].finished 
        listItem = "<li>" + tasks[i].taskDescription + "</li>";
        console.log(tasks[i]);
        console.log(i);

        // Add list item to task list
        $("#task-list").append(listItem);
        
        // Add click function
        // Find the list item and add a click function
        listItem = $("#task-list li:last");
        listItem.click(toggelFinished);

    }


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

    // Empty the input field
    $("#new-task").val("");

    rewriteTaskList();
}

function clear() {
    'use strict';
    alert("funkar också");
}


$("#new-task-button").click(addNewTask);
$("#remove-button").click(clear);