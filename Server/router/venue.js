const express = require('express');
const venues = require("../model/venue");

const router = express.Router();

router.post('/post/venue', async(req,res)=>{
    try{
        const venue = await venues.findOne({venueName: req.body.venueName})
       if(venue) return res.status(403).json('venue already exist')
       
        const newVenue = new venues({
            venueName: req.body.venueName,
            image: req.body.image,
            isAvailable: req.body.isAvailable,
            location: req.body.location,
            
        })
        await newVenue.save()
        res.status(201).json(newVenue)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})

router.get('/discover/venue', async(req,res)=>{
    try{
        const venue = await venues.find()
        res.status(200).json(venue)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})



module.exports = router;