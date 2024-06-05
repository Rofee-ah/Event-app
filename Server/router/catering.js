const express = require('express');
const caterings = require("../model/catering");

const router = express.Router();

router.post('/post/catering', async(req,res)=>{
    try{
        const catering = await caterings.findOne({cateringName: req.body.cateringName})
       if(catering) return res.status(403).json('catering already exist')
       
        const newCatering = new caterings({
            cateringName: req.body.cateringName,
            image: req.body.image,
            date:req.body.date,
            time:req.body.time,
            description: req.body.description,
            
        })
        await newCatering.save()
        res.status(201).json(newCatering)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})

router.get('/discover/catering', async(req,res)=>{
    try{
        const catering = await caterings.find()
        res.status(200).json(catering)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})



module.exports = router;