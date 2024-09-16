const express = require('express');
require('dotenv').config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.get('/users', (req, res)=>{
    console.log('GETS users');
})

app.get('/users/:id', (req, res)=>{
    console.log('GET users by ID');
})

app.post('/users/:id', (req, res)=>{
    console.log('POST users');
})

app.delete('/users/:id', (req, res)=>{
    console.log('DELETE users');
})

app.listen(port, ()=>{
    console.log(`Servidor en el puerto ${port}`)
});