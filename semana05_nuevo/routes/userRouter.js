const express = require('express');
const router = express.Router();

//Obtener todos los usuarios
router.get('/', (req, res) => {
    console.log('GET Users');
});
//obtener por id
router.get('/:id', (req, res) => {
    console.log('GET Users by ID');
});
//crear usuarios
router.post('/', (req, res) => {
    console.log('POST User');
})
//actualizar usuario
router.put('/:id', (req, res) => {
    console.log('PUT User');
})
//Eliminar usuarios
router.delete('/:id', (req, res) => {
    console.log('DELETE User');
})

nodule.exports = router;