const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Schema

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    }
})

module.exports = Scholarship = mongoose.model('Scholarship', ItemSchema);