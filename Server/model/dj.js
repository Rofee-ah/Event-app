const mongoose = require('mongoose')

const djSchema = new mongoose.Schema({
    djName: {type: String, unique: true},
    image: String,
    price: String,
    description: String,
    data: String,
    time: String,

},
{timestamps: true}
)
module.exports = mongoose.model('dj', djSchema)