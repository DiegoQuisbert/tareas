// importo las rutas sisisi
const productRouter = require('./productsRouter');
const UserRouter = require('./userRouter');

//Defino la función de la aplicación de entrada
function routerAPI(app){
    //definimos los endPoints
    app.use('/users', UserRouter);
    app.use('/products', productRouter);
}
//Exportamos la función

module.exports = routerAPI