let tasks = [{ id: 1, description: 'do homework', dateCreate: '09.07.2019, 08:15:37', status: false }]; //id:number, description:__, dateCreate:__, status: done/not done
let nextID = 2;

module.exports = class Task {
    constructor(description) {
        this._id = nextID++;
        this.description = description;
        this.date = new Date().toLocaleString();
        this.status = false;
    }
    get id() {
        return this._id;
    }
    static getAll() {
        return tasks;
    }
    static getById(id) {
        for (let task of tasks) {
            if (task.id === id) {
                return task;
            }
        }
    }
    static save(task) {
        tasks.push(task);
    }
    static update(id, task) {
        let currentTask = Task.getById(id);
        if (currentTask) {
            currentTask.description = task.description;
        };
    }
    static remove(id) {
        tasks = tasks.filter(t => t._id !== id);
    }
    static isValid(task) {
        if (task.description === undefined || task.description === "") {
            return false;
        }
        return true;
    }
    static has(id) {
        return Boolean(Task.getById(id));
    }
};