const express = require('express');
const venues = require("../model/mc");

const router = express.Router();

router.post('/post/mc', async(req,res)=>{
    try{
        const venue = await venues.findOne({mcName: req.body.mcName})
       if(venue) return res.status(403).json('mc already exist')
       
        const newVenue = new venues({
            mcName: req.body.mcName,
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

router.get('/post/mc', async(req,res)=>{
    try{
        const venue = await venues.find()
        res.status(200).json(venue)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})



module.exports = router;