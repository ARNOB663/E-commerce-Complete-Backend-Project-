const mongoose = require('mongoose');

const DataSchema= new mongoose.Schema({

    categoryName: { type: String, unique: true, required: true },
    categoryImg: { type: String, required: true },

},{
    timestamps: true, versionKey: false
})
const CategoryModel= mongoose.model('catagories', DataSchema);
module.exports = CategoryModel;