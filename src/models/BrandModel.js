const mongoose= require("mongoose")

const DataSchema = new mongoose.Schema({    
  brandName:{type:String,unique:true,required:true},
    brandImage:{type:String,required:true},

})