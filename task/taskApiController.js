const Task = require('./task');

let taskApiController = {
    getAll (req, res){
        res.json(Task.getAll());
    },
    get(req, res){
        if(Task.has(req.id)){
            res.json(Task.getById(req.id))
        } else {
            res.status(404).send(`Can not get task with ID: ${id}`);
        }
    }
}

module.exports = taskApiController;