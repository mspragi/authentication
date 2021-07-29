const express = require('express');
const mongoose = require('mongoose');
const SignupData = require('../Db/signup');
const route = express.Router();


route.post('/',async(req,res)=>{
    const {fullname,email,password,confirmpassword} = req.body;
    const email_repeat = await SignupData.findOne({email});
    
    if(email_repeat){
         res.json({message:"User already Exists"})
    }else{

    let signupdetails = {};
    // sigupdetails.firstname =firstname;
    // sigupdetails.lastname  =lastname;
    signupdetails.fullname  = fullname ;
    signupdetails.email     =email;
    signupdetails.password  =password;
    signupdetails.confirmpassword= confirmpassword;

    let signupmodel = new SignupData(signupdetails);
    await signupmodel.save();
    res.json(signupmodel);
    console.log(signupmodel);
    }

})

module.exports = route;