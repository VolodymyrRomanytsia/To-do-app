const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema =new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    maingoal: {
        type: String,
        default: null
    },
    todos: [ {
        text: {
            type: String,
            required: true
        },
        resolved: {
            type: Boolean,
            default: false,
            required: true
        }    
    }]
        
    
})

module.exports = mongoose.model('users', userSchema)