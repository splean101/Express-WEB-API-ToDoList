let tasks = [];
let nextID = 1;

module.exports = class Task{
    constructor(description){
        this._id = nextID++;
        this.description = description;
    }
    get id(){
        return this._id;
    }
    static getAll (){
        return tasks;
    }
    static getById (id){
        for (let task of tasks) {
            if (task.id === id) {
                return task;
            }
        }
    }
}