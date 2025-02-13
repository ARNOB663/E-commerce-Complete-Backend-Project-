const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
    email:{type:String, required:true , unique:true, lowercase:true},
    otp:{type:String, required:true},

},{timestamps:true, versionKey:false});

const UserModel = mongoose.model("Users", DataSchema);
module.exports = UserModel;