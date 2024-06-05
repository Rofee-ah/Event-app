const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const userRoute = require('./router/user')
const eventRoute = require('./router/event')
const venueRoute = require('./router/venue')
const musicRoute = require('./router/music')
const mcRoute = require('./router/mc')
const djRoute = require('./router/dj')
const dancerRoute = require('./router/dancer')
const comedianRoute = require('./router/comedian')
const cateringRoute = require('./router/catering')








const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

dotenv.config();
const PORT = process.env.PORT || 8080;
const url = process.env.MONGO_URI
mongoose.connect( url)
const connection = mongoose.connection
connection.once('open', ()=>{
    console.log("MongoDB database connection established successfully")
})

app.use('/api', userRoute)
app.use('/', eventRoute)
app.use('/', venueRoute)
app.use('/', musicRoute)
app.use('/', mcRoute)
app.use('/', djRoute)
app.use('/', dancerRoute)
app.use('/', comedianRoute)
app.use('/', cateringRoute)







app.listen("8080",()=>{console.log("server listening on port 8080")})


