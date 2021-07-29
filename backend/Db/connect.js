var mongoose = require('mongoose');

const url = `mongodb+srv://pragi:dbuser@cluster0.9jv4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const dataconnect = async()=>{
  try{
       await mongoose.connect(url,{ useNewUrlParser: true,useUnifiedTopology: true });
       console.log('data connected.....')
    }
    catch(err){
        console.log(err);

    }

}

module.exports = dataconnect;