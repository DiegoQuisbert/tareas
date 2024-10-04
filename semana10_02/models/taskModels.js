const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
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
    
    const Task = mongoose.model('Task', taskSchema);
    //exporto el modelo qié
    module.exports = Task;