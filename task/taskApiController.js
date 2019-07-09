const Task = require('./task');

let taskApiController = {
    getAll(req, res) {
        res.json(Task.getAll());
    },
    get(req, res) {
        if (Task.has(req.id)) {
            res.json(Task.getById(req.id))
        } else {
            res.status(404).send(`Can not get task with ID: ${id}`);
        }
    },
    post(req, res) {
        if (Task.isValid(req.body)) {
            let task = new Task(req.body.description);
            Task.save(task);
            res.status(201);
            res.set('Location', `${req.baseUrl}/${task.id}`).end();
        } else {
            res.status(400).end();
        };
    },
    put(req, res){
        if(!Task.has(req.id)){
            res.status(404).end();
        } else if (!Task.isValid(req.body)) {
            res.status(400).end();
        } else {
            Task.update(req.description);
            res.end();
        };
    },
    delete(req, res){
        if(Task.has(req.id)){
            Task.remove(req.id);
            res.end();
        } else {
            res.status(404).send(`Can not get task with ID: ${id}`);
        };
    }
};

module.exports = taskApiController;