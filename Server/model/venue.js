const mongoose = require('mongoose')

const venueSchema = new mongoose.Schema({
    venueName: {type: String, unique: true},
    image: String,
    location: String,
    isAvailable: Boolean

},
{timestamps: true}
)
module.exports = mongoose.model('venue', venueSchema)