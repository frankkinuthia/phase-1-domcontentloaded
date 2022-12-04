// Your code goes here

document.addEventListener("DOMContentLoaded", () => {

    const newTaskForm = document.getElementById("create-task-form");
    const newTaskDesc = document.getElementById("new-task-description");
    const newTaskPriority = document.getElementById("new-task-priority");

    //creating the list where the new tasks will stay on the DOM

    const newTaskUl = document.getElementById("tasks");

    //attach the event listener

    newTaskForm.addEventListener("submit", createNewTask);
});

const createNewTask = event => {
    //stopping the default form submit behaviour 
    event.preventDefault();

    const newTaskDesc = document.getElementById("new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDesc.value;

    appendNewTask(newTask);
    event.target.reset();
}

const appendNewTask = task => {
    document.getElementById("tasks").appendChild(task);
}