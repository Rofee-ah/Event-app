const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    musicName: {type: String, unique: true},
    image: String,
    price: String,
    description: String,
    data: String,
    time: String,

},
{timestamps: true}
)
module.exports = mongoose.model('music', musicSchema)