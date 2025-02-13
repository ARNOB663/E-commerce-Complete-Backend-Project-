const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({

    name:{type:String, required:true},
    

},{
    timestamps:true, versionKey:false
})
const FeaturesModel = mongoose.model("Features", DataSchema);
module.exports = FeaturesModel;