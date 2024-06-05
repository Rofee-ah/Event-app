const express = require('express');
const venues = require("../model/comedian");

const router = express.Router();

router.post('/post/comedian', async(req,res)=>{
    try{
        const venue = await venues.findOne({comedianName: req.body.comedianName})
       if(venue) return res.status(403).json('comedian already exist')
       
        const newVenue = new venues({
            comedianName: req.body.comedianName,
            image: req.body.image,
            date:req.body.date,
            time:req.body.time,
            description: req.body.description,
            
            
        })
        await newVenue.save()
        res.status(201).json(newVenue)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})

router.get('/post/comedian', async(req,res)=>{
    try{
        const venue = await venues.find()
        res.status(200).json(venue)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})



module.exports = router;