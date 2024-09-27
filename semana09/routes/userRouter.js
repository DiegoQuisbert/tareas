const express = require('express');
const router = express.Router();

const {createUser, getUser, getUsersById, deleteUserById, updateUserById} = require('../controllers/userController');

router.get('/', getUser );

router.post('/', createUser);

router.get('/:id', getUsersById);

router.delete('/:id', deleteUserById);

router.put('/:id', updateUserById);


module.exports = router;