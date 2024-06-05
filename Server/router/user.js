const express = require('express');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');
const users = require('../model/user');
const router = express.Router();

router.post('/user/register', async (req, res) => {
    try {
       if (!req.body.email) {
        return res.status(403).json({error: 'please input an email'})
       } 
       const user = await users.findOne({email: req.body.email})
       if(user) return res.status(403).json('account already exist')
        else{
        const newUser = new users({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.MY_SECRET_KEY).toString(),
        })
        await newUser.save()
        res.status(201).json(newUser)
        }
    } catch (error) {
        res.status(404).json('server error')
    }
})

router.post('/user/login', async (req, res) => {
    try {
        const user = await users.findOne({email: req.body.email})
        if(!user) return res.status(404).json('user not found')
        const decryptPassword = CryptoJS.AES.decrypt(user.password, process.env.MY_SECRET_KEY).toString(CryptoJS.enc.Utf8)
        if(decryptPassword !== req.body.password) return res.status(404).json('incorrect password')
        
        const generateToken = jwt.sign({id: user._id},
            process.env.MY_SECRET_KEY,
            {expiresIn: '1d'}
        )
        const {password, lastname, createdAt, updatedAt, ...other} = user._doc
        res.status(200).json({other, generateToken})
    } catch (error) {
        res.status(404).json('server error')
    }
})


module.exports = router