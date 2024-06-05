const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    email: {type: String, unique: true, required: true},
    password: String
},
{timestamps: true}
)
module.exports = mongoose.model('users', userSchema)