const express = require('express');
const mongoose = require('mongoose');  
const Data = require('../Db/login')
const route = express.Router();
const SignupData = require('../Db/signup')




route.get('/' , async (req, res)=>{
  
    const Url = await SignupData.find({}, 'name _id');
   
   
    if(Url ){
        res.json({
           Url
        })
    }

})








module.exports = route

