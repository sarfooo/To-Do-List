"use strict";

import ToDoListManager from "./ToDoListManager.js";
const todoListManager = new ToDoListManager();

function addTask(task) {
    let tasks = document.getElementById("task-list");
    let li = document.createElement("li");
    let marker = document.createElement("img");

    marker.src = "./images/x-mark-10349.svg";
    marker.id = "remove-task";
    li.append(marker);
    
    li.append(document.createTextNode(task));
    tasks.append(li);    
    todoListManager.addTask(task);
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
        addTask(task);
    }
}

function clearTasks() {
    let tasks = document.getElementById("task-list")
    tasks.innerHTML = ''
}

function restoreTasks() {
    clearTasks()
    for (task of todoListManager.getTasks()) {
        addTask(task);
    }
}

let taskForm = document.getElementById("task-form");
taskForm.addEventListener("submit", () => {
    event.preventDefault();

    const formData = new FormData(taskForm);
    let task = formData.get("task");
    addTask(task);
})

let button = document.getElementById("clear-tasks");
button.addEventListener("click", clearTasks);