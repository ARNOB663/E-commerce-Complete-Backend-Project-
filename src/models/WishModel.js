const mongoose = require("mongoose");
const { schema } = require("./UserModel");

const DataSchema = new schema({
    productID:{type:mongoose.Schema.Types.ObjectId, required:true},
    userID:{type:mongoose.Schema.Types.ObjectId, required:true},


},{})

const WishModel = mongoose.model("Wishes", DataSchema);
module.exports = WishModel;