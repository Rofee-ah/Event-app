const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    eventName: {type: String, unique: true},
    image: String,
    price: String,
    isUpcoming: Boolean,
    location: String,
    category: String,
},
{timestamps: true}
)
module.exports = mongoose.model('events', eventSchema)