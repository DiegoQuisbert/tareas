//importo el among us chaval
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
//creo el esquema
const mySchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

// const mySchema2 = new Schema({
//     name: String,
//     mail: String
// })

const model = Mongoose.model('Users', mySchema);
//exporto el modelo qié
module.exports = model;