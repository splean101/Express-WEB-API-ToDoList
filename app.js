/*
GET:
    getAllByDate   /api/tasks/bydate
    getAllByStatus /api/tasks/bystatus
    getDone        /api/tasks/done
    getNotDone     /api/tasks/notdone
    getByID        /api/tasks/:id
POST:
    addNewTask     /api/tasks/ BODY {description: 'text' - String}
PUT:
    updateOne      /api/tasks/:id  BODY {description: 'text' - String}
DELETE:
    deleteOne      /api/tasks/:id
*/
const express = require('express');
const bodyParser = require('body-parser');

const tasks = []; //id:number, description:__, dateCreate:__, status: done/not done
let nextID = 1;

const app = express();
app.use('/api', bodyParser.json());

app.listen(3000);