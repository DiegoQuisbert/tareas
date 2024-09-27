//importamo las rutas

const userRouter = require('./userRouter');

function routerAPI(app){
    //definimos los endPoints
    app.use('/users', userRouter);
}

module.exports = routerAPI;