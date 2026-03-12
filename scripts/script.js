"use strict";

import ToDoListManager from "./ToDoListManager.js";
const todoListManager = new ToDoListManager();

function addTask(task, isDisplay) {
    let tasks = document.getElementById("task-list");
    let li = document.createElement("li");
    let marker = document.createElement("img");
    let span = document.createElement("span");

    marker.src = "./images/x-mark-10349.svg";
    marker.id = "remove-task";
    marker.addEventListener("click", () => {
        li.remove();
        todoListManager.removeTask(task);
    });
    li.append(marker);

    let previousTask;
    span.textContent = task;
    span.setAttribute("contentEditable", "true")
    span.addEventListener("focus", () => { previousTask = span.textContent })
    span.addEventListener("blur", (event) => { handleTextEditing(event, previousTask, span.textContent) }, {once: true})
    li.append(span);
    
    tasks.append(li); 
    if (!isDisplay) {
        todoListManager.addTask(task);
    }
}

function handleTextEditing(event, previousTask, newTask) {
    console.log(previousTask, newTask);
    if (previousTask !== newTask) {
        console.log("HERE!");
        event.target.textContent = newTask
        todoListManager.removeTask(previousTask);
        todoListManager.addTask(newTask);
    }
}


function removeTask(task) {
    let tasks = document.getElementById("task-list");
    tasks.removeChild(task);
    todoListManager.removeTask(task);
}

function findTasks(task) {
    clearTasks()
    let found = todoListManager.findTasks(task);
    for (let task of found) {
        addTask(task, true);
    }
}

function clearTasks() {
    let tasks = document.getElementById("task-list")
    tasks.replaceChildren();
}

function restoreTasks() {
    clearTasks()
    for (let task of todoListManager.getTasks()) {
        addTask(task, true);
    }
}

let taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", () => {
    event.preventDefault();

    const formData = new FormData(taskForm);
    let task = formData.get("task");
    addTask(task, false);
})

let search = document.getElementById("search");
search.addEventListener("input", () => {
    if (event.target.value.length < 1) {
        restoreTasks();
    }
    findTasks(event.target.value);
})

let button = document.getElementById("clear-tasks");
button.addEventListener("click", clearTasks);