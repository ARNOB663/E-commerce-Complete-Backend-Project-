const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    title: { type: String, required: true },
     shortDes: { type: String, required: true },
     price: { type: Number, required: true },
     discount:{type:boolean},
        discountPrice:{type:Number},
        image:{type:String},
        star:{type:String},
        stock:{type:String,required:true},
        remark:{type:String,required:true},
         categoryID:{type:mongoose.Schema.Types.ObjectId,ref:"categories",required:true},
         brandID:{type:mongoose.Schema.Types.ObjectId,ref:"brands",required:true},
},{
    timestamps: true, versionKey: false
})
const ProductModel = mongoose.model('products', DataSchema);
module.exports = ProductModel;