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
