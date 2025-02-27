const mongoose = require("mongoose");

const DataSchema = new Schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
   color:{type:String, required:true},
   price:{type:String, required:true},
   qty:{type:String, required:true},
    size:{type:String, required:true},
    // createdAt:{type:Date, default:Date.now, required:true},
    // updatedAt:{type:Date, default:Date.now, required:true},

},{
    timestamps: true, versionKey: false
})

const CartModel = mongoose.model("carts", DataSchema);
module.exports = CartModel;