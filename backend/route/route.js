 const express = require('express');
 const mongoose = require('mongoose');  
 const Data = require('../Db/login')
 const route = express.Router();
 const SignupData = require('../Db/signup')

 


route.post('/' , async (req, res)=>{
    const { email, password} = req.body;     

    const Username = await SignupData.findOne({ email });
    const Password = await SignupData.findOne({ password });
    
    if (Username && Password) {
      res.json({
        email,
      });
      console.log(email,password)
    } else {
      res.status(401).json({
        message: "Invalid Email or Password",
      });
    }

})








module.exports = route

 