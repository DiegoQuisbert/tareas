const express = require('express');
const routerAPI = require('./routes');
const db = require('./config/dataBase.js');
require('dotenv').config();
// const {Users} = require('./models/userModels');



const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    console.log('oh soy el middleware hermano');
    next();
    // const body = req.body;
    // const {email, password} = body;
    // if(email == 'ohnohermano@gmail.com' && password == '1234'){
    //     console.log(body);
    //     next();
    // } else {
    //     res.status(403).json({msg: 'error'});
    // }
})

app.get('/', (req, res) =>{
    res.status(200).send('<h1>API REST </h1>');
})

//llamamo a la ruta mame
routerAPI(app);

app.listen(port, ()=>{
    console.log(`Servidor en el puerto ${port}`)
});
