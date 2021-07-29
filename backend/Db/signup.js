var mongoose = require('mongoose');

const signup = new mongoose.Schema({
  fullname:{
      type:String
  },
  email:{
      type:String,
      unique:true,
  },
  password:{
      type:String
  },
  confirmpassword:{
      type:String
  }
})




module.exports = SignupData = mongoose.model('signup',signup);