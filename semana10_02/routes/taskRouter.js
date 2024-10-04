const express = require('express');
const router = express.Router();

const { createTask, getTask, getTaskByUsersId, deleteTaskById, updateTaskById } = require('../controllers/taskController');

router.get('/', getTask );

router.post('/', createTask);

router.get('/login', getTaskByUsersId);

router.delete('/:id', deleteTaskById);

router.put('/:id', updateTaskById);


module.exports = router;