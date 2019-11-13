// this is the JavaScript file

/* 
Description of how the ToDo-list works:
Our tasks will be stored in an array called tasks.
The array tasks will contain task objects with the following structure:
{
    taskDescription: "The task at hand",
    finished: false
}
This is were the data is stored, and has to be updated 
every time the ToDo-list changes. 
The content of the ToDo-list will be written by the rewriteTaskList function.
*/


// This is where the information about the tasks will be stored
var tasks = []; 


/* addNewTask is called when the Add task button is clicked on the homepage.
It adds a new task to the ToDo-list, empties the input field and calls 
rewriteTaskList */
function addNewTask() {
    'use strict';
    
    var task, taskText;

    // Read input with jQuery val-method: 
    // https://www.w3schools.com/jquery/html_val.asp
    taskText = $("#new-task").val();

    // Create a task object
    task = {
        taskDescription: taskText,
        finished: false
    };

    // Put the task object in the tasks array
    tasks.push(task);

    // Empty the input field with jQuery val-method
    $("#new-task").val("");

    // Rewrite the task list using the tasks array
    rewriteTaskList();
}


/* toggleFinished is called when a task is clicked in the task list
on the homepage. It changes the value of the finished property of 
the corresponding task object and calls rewriteTaskList */
function toggleFinished() {
    'use strict';

    // Find the index of the task with the jQuery index method
    // https://api.jquery.com/index/
    // 'this' is a reference to the object that called the function
    var i = $(this).index();

    // Change value of the 'finished' property of the task with index i 
    // in the tasks array using the logical not operator (!)
    // This changes the value to its opposite: If it is true, 
    // it will become false, and if it is false, it will become true
    tasks[i].finished = !tasks[i].finished;

    // Rewrite the task list using the tasks array
    rewriteTaskList();
}


/* rewriteTaskList is called from all the functions that changes the
content of the tasks array. It writes the task list on the homepage 
according to what is stored in the tasks array, and adds toggleFinished
as an onclick function to all the list elements */
function rewriteTaskList() {
    'use strict';
 
    // Find the task list on the homepage and empty it using the 
    // jQuery method empty
    // https://www.w3schools.com/jquery/html_empty.asp
    $("#task-list").empty();

    // Create the new task list on the homepage by looping over the tasks array
    for (var i = 0; i < tasks.length; i++) {

        var taskText, classInfo, listElementString, lastListItem;

        // Find the decription for the current task
        taskText = tasks[i].taskDescription;

        // Find out if the current task should be shown with or without
        // strike through as defined by the CSS class 'strike-through'
        if (tasks[i].finished) {
            // Task is finished, and will be shown with strike through
            classInfo = ' class="strike-through"';
        } 
        else {
            // Task is not finished, and will be shown without strike through
            classInfo = '';
        }

        // Create a string that describes the list element we want to show 
        // on the homepage using a template literal
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
        listElementString = `<li${classInfo}>${taskText}</li>`;
        
        // Add the list element to the task list on the homepage using 
        // jQuery append method
        // https://www.w3schools.com/jquery/html_append.asp
        $("#task-list").append(listElementString);
        
        // Add click function to the list element that was just created

        // Find the last list item in the task list on the homepage
        // This is the one that was just added
        // https://www.w3schools.com/jquery/jquery_ref_selectors.asp
        lastListItem = $("#task-list li:last");

        // Add toggleFinished as an onclick function
        // https://www.w3schools.com/jquery/event_click.asp
        lastListItem.click(toggleFinished);
    }
}


/* remove FinishedTasks is called when the Remove finished tasks button is clicked 
on the homepage.
It should go through the tasks array and remove those tasks that are finished,
and when that is done, call rewriteTaskList */

/*function removeFinishedTasks() {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].finished) {
            $(".strike-through").remove();
            }
    }
}*/

function removeFinishedTasks() {
    var tasks2 = [];
    for (var i = 0; i < tasks.length; i++) {
        if (!tasks[i].finished) {
            tasks2.push(tasks[i]);
        }
    }
    tasks = tasks2;
    rewriteTaskList();
}


//$(".strike-through").remove();


$("#new-task-button").click(addNewTask);
$("#remove-button").click(removeFinishedTasks);
