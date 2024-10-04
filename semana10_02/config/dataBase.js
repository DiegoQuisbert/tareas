const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

//Conectamos a la db
mongoose.connect('mongodb://127.0.0.1:27017/app');
const db = mongoose.connection;

db.on('error', ()=> console.error('Error'));
db.once('open', ()=>{
    console.log('conexion correcta');
})

module.exports = db;

