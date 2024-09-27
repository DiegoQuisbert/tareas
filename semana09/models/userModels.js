//importo el among us chaval
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
//creo el esquema

const mySchema2 = new Schema({
        name: String,
        created: {
            type: Date,
            default: Date.now
        },
        email: {
            type : String,
            required: true,
            unique: true
        },
        password:{
            type: String,
            required: true,
            unique: true
        }
    });
    
    const User = Mongoose.model('Users', mySchema2);
    //exporto el modelo qié
    module.exports = User;