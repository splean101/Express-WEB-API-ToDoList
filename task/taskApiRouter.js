const express = require ('express');
const bodyParser = require('body-parser');
const taskApiController = require('./taskApiController');

let taskApiRouter = express.Router();

module.exports = taskApiRouter;
taskApiRouter.use('/', bodyParser.json());

taskApiRouter.use('/:id', (req, res, next) => {
    req.id = Number(req.params.id);
    next();
});

taskApiRouter.route('/:id')
.get(taskApiController.get)
.put(taskApiController.put)
.delete(taskApiController.delete);

taskApiRouter.route('/')
.post(taskApiController.post);

taskApiRouter.route('/bydate')
.get(taskApiController.getAllByDate);

taskApiRouter.route('/bystatus')
.get(taskApiController.getAllByStatus);

taskApiRouter.route('/done')
.get(taskApiController.getDone);

taskApiRouter.route('/notdone')
.get(taskApiController.getNotDone);