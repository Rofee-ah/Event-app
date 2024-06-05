const mongoose = require('mongoose')

const comedianSchema = new mongoose.Schema({
    comedianName: {type: String, unique: true},
    image: String,
    price: String,
    description: String,
    data: String,
    time: String,

},
{timestamps: true}
)
module.exports = mongoose.model('comedian', comedianSchema)