const mongoose = require('mongoose')

const Schema = mongoose.Schema

const todoSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    resolved: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('item', todoSchema)