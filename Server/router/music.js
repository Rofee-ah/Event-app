const express = require('express');
const musics = require("../model/music");

const router = express.Router();

router.post('/post/music', async(req,res)=>{
    try{
        const music = await musics.findOne({musicName: req.body.musicName})
       if(music) return res.status(403).json('music already exist')
       
        const newMusic = new musics({
            musicName: req.body.musicName,
            image: req.body.image,
            date:req.body.date,
            time:req.body.time,
            description: req.body.description,
            
            
        })
        await newMusic.save()
        res.status(201).json(newMusic)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})

router.get('/post/music', async(req,res)=>{
    try{
        const music = await musics.find()
        res.status(200).json(music)
    }catch(error){
        console.log(error)
        res.status(404).json('server error')
    }
})



module.exports = router;