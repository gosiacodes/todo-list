// this is the JavaScript file

/* The task objects will have the following structure:
{
	taskDescription: "The task at hand",
	finished: false
}

// tasks[i].finished = !tasks[i].finished;

*/

var tasks = [];

function addNewTask() {
    'use strict';
    
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

function toggelFinished() {
    'use strict';
    var i = $(this).index();
    var finished = tasks[i].finished;
    tasks[i].finished = !finished;
    console.log(finished);
    //$(this).toggleClass("strike-through");
    rewriteTaskList();

    console.log("toggle");
    console.log(this);
}

function rewriteTaskList() {
    'use strict';
    var taskList;
    var listItem;
    //console.log(tasks);

    // Find the unordered list
    taskList = $("#task-list");
    //console.log(taskList);

    // Remove the previous list
    $("#task-list").empty();

    // Create the new list
    for (var i = 0; i < tasks.length; i++) {
        // Create list item
        if (tasks[i].finished) {
            listItem = '<li class="strike-through">' + tasks[i].taskDescription + "</li>";
            console.log("it is true")
        } 
        else {
            listItem = "<li>" + tasks[i].taskDescription + "</li>";
            console.log("it is false")
        }
    
        
        //console.log(tasks[i]);
        //console.log(i);

        // Add list item to task list
        $("#task-list").append(listItem);
        
        // Add click function
        // Find the list item and add a click function
        listItem = $("#task-list li:last");
        listItem.click(toggelFinished);

    }
}

function removeFinishedTasks() {
    
$(".strike-through").slideUp(funktion() {
    $("this").remove();
});
}


/*function removeFinishedTasks() {
    $(".strike-through").remove();
     $(".strike-through").val("");
}*/

/*function removeFinishedTasks() {
    for (var i = 0; i < tasks.length; i++) {
        if (finished === true) {
            $(".strike-through").slideUp(function() {
                $("this").remove();
            });
        }
    }
}*/


$("#new-task-button").click(addNewTask);
$("#remove-button").click(removeFinishedTasks);