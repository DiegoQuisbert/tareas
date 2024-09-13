const express = require('express');
const router = express.Router();

//importo el controlador kajdsf
const {getUsers, addUser, getUserById} = require('../controllers/userController');

//Obtener todos los usuarios
router.get('/', getUsers);
//obtener por id
router.get('/:id', getUserById);
//crear usuarios
router.post('/', addUser);
//actualizar usuario
router.put('/:id', (req, res) => {
    console.log('PUT User');
})
//Eliminar usuarios
router.delete('/:id', (req, res) => {
    console.log('DELETE User');
})

module.exports = router;