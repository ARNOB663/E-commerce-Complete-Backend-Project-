const mongoose = require("mongoose");


const DataSchema = new Schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},


},{})

const WishModel = mongoose.model("wishes", DataSchema);
module.exports = WishModel;