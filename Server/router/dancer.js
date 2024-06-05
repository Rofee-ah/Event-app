const express = require('express');
const venues = require("../model/dancer");

const router = express.Router();

router.post('/post/dancer', async(req,res)=>{
    try{
        const venue = await venues.findOne({dancerName: req.body.dancerName})
       if(venue) return res.status(403).json('dancer already exist')
       
        const newVenue = new venues({
            dancerName: req.body.dancerName,
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

router.get('/discover/dancer', async(req,res)=>{
    try{
        const venue = await venues.find()
        res.status(200).json(venue)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})



module.exports = router;