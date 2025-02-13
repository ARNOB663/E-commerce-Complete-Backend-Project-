const mongoose = require("mongoose");

const DataSchema = new Schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},
    des:{type:String, required:true},
    rating:{type:string, required:true},


},{timeStamps:true, versionKey:false});

const ReviewModel = mongoose.model("Wishes", DataSchema);
module.exports = ReviewModel;