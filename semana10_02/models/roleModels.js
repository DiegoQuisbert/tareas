const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roleSchema = new Schema({
        description: String,
        created: {
            type: Date,
            default: Date.now
        },
        completed: {
            type: Boolean
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'Users'
        }
    });
    
    const Role = mongoose.model('Role', RoleSchema);
    //exporto el modelo qié
    module.exports = Role;