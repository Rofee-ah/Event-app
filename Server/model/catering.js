const mongoose = require('mongoose')

const cateringSchema = new mongoose.Schema({
    cateringName: {type: String, unique: true},
    image: String,
    price: String,
    description: String,
    data: String,
    time: String,

},
{timestamps: true}
)
module.exports = mongoose.model('catering', cateringSchema)