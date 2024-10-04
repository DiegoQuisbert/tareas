//importo el among us chaval
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
//creo el esquema

const userSchema = new Schema({
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
    
    const User = Mongoose.model('Users', userSchema);
    //exporto el modelo qié
    module.exports = User;