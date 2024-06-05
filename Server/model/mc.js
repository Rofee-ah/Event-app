const mongoose = require('mongoose')

const mcSchema = new mongoose.Schema({
    mcName: {type: String, unique: true},
    image: String,
    price: String,
    description: String,
    data: String,
    time: String,

},
{timestamps: true}
)
module.exports = mongoose.model('mc', mcSchema)