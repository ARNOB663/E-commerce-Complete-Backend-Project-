const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    img1:{type:String,required:true},
    img2:{type:String,required:true},
    img3:{type:String,required:true},
    img4:{type:String,required:true},
    img5:{type:String},
    img6:{type:String},
    img7:{type:String},
    img8:{type:String},
    
        remark:{type:String,required:true},
         categoryID:{type:mongoose.Schema.Types.ObjectId,ref:"categories",required:true},
         brandID:{type:mongoose.Schema.Types.ObjectId,ref:"brands",required:true},
},{
    timestamps: true, versionKey: false
})
const ProductModel = mongoose.model('products', DataSchema);
module.exports = ProductModel;