const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    age: {type: Number},
    username: String,
    password: String
})
module.exports = mongoose.model('User',userSchema )