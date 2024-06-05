const mongoose = require('mongoose')

const dancerSchema = new mongoose.Schema({
    dancerName: {type: String, unique: true},
    image: String,
    price: String,
    description: String,
    data: String,
    time: String,

},
{timestamps: true}
)
module.exports = mongoose.model('dancer', dancerSchema)