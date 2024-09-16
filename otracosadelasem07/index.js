const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const {Users} = require('./models/userModels');

//Conectamos a la db
mongoose.connect('mongodb://127.0.0.1:27017');
const db = mongoose.connection;

db.on('error', ()=> console.error('Error'));
db.once('open', ()=>{
    console.log('conexion correcta');
})

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    // console.log('oh soy el middleware hermano');
    // const body = req.body;
    // const {email, password} = body;
    // if(email == 'ohnohermano@gmail.com' && password == '1234'){
    //     console.log(body);
    //     next();
    // } else {
    //     res.status(403).json({msg: 'error'});
    // }
})

app.get('/users', (req, res)=>{
    console.log('GETS users');
    res.status(200).json({msg: 'hola'});
})

app.get('/users/:id', (req, res)=>{
    console.log('GET users by ID');
    res.status(200).json({msg: 'hola'});
})

app.post('/users/:id', async(req, res)=>{
    console.log('POST users');
    console.log(Users);
    const body = req.body;
    const user = {
        name: body.name,
        email: body.email,
        password: body.password
    }
    //creo una instancia de user
    const myUser = new Users(user);
    await myUser.save();

    res.status(200).json({msg: 'hola'});
})

app.delete('/users/:id', (req, res)=>{
    console.log('DELETE users');
    res.status(200).json({msg: 'hola'});
})

app.listen(port, ()=>{
    console.log(`Servidor en el puerto ${port}`)
});