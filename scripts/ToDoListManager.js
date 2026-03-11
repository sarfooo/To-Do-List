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

    removeTask(oldTask) {
        for (let i = 0; i < this._tasks.length; i++) {
            if (this._tasks[i] == oldTask) {
                this._tasks.splice(i);
                break;
            }
        }
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


export default ToDoListManager;