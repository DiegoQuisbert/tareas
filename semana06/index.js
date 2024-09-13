const express = require('express');
//importamos el módulo
require('dotenv').config();
//Accedemos al puerto desde el .env )?
const port = process.env.PORT;

//importamos las rutas
const routerAPI = require('./routes');
const app = express();
//Middlewares de json
app.use(express.json());

//ruta raíz -> colocaré html despué
app.get('/', (req, res) => {
    res.status(200).send('<h1>API REST</h1>');
})

//Llamamos a las rutas
routerAPI(app);
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
})
