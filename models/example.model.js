const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Example of a mongodb Schema
const exampleModel = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String
    }
})

module.exports = mongoose.model('example', exampleModel);