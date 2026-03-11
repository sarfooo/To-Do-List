"use strict";

class ToDoListManager {
    constructor() {
        this._tasks = [];
    }

    getTasks() {
        return this._tasks;
    }

    clearTasks() {
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task);
    }
    
    findTasks(keyword) {
        let found = [];
        for (let task of this._tasks) {
            if (task.includes(keyword)) {
                found.push(task);
            }
        }
        return found;
    }
}