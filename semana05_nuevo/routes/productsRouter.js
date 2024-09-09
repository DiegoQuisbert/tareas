const express = require('express');
const router = express.Router();

//Obtener todos los productos
router.get('/', (req, res) => {
    console.log('GET Products');
});
//obtener por id
router.get('/:id', (req, res) => {
    console.log('GET Products by ID');
});
//crear productos
router.post('/', (req, res) => {
    console.log('POST Product');
})
//actualizar producto
router.put('/:id', (req, res) => {
    console.log('PUT Product');
})
//Eliminar productos
router.delete('/:id', (req, res) => {
    console.log('DELETE Product');
})

nodule.exports = router;