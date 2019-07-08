let tasks = [{id:1, description: "do homework"}]; //id:number, description:__, dateCreate:__, status: done/not done
let nextID = 2;

module.exports = class Task{
    constructor(description){
        this._id = nextID++;
        this.description = description;
        this.date = new Date().toLocaleTimeString();
        this.status = false;
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


    static has (id){
        return Boolean(Task.getById(id));
    }
}