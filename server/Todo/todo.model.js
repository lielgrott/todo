const mongoose = require('mongoose')

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: '',
    },
    done: {
        type: Boolean,
        required: true,
        default: false,
    }
},
{
    timestamps: true
});

module.exports = new mongoose.model('Todo', TodoSchema);