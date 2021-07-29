const mongoose  = require("mongoose")

const user_login = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
})


module.exports = Data =mongoose.model('user_login',user_login);