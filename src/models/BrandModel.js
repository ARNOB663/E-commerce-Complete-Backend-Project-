const mongoose= require("mongoose")
const DataSchema = new mongoose.Schema({    
  brandName:{type:String,unique:true,required:true},
  brandImage:{type:String,required:true,},
  // category:{type:mongoose.Schema.Types.ObjectId,ref:"categories",required:true}
},{
    
    timestamps:true,versionKey:false
}
)
const BrandModel = mongoose.model("brands",DataSchema)
module.exports = BrandModel