const  mongoose = require('mongoose');
const BrandModel=require('../models/BrandModel');
const CategoryModel=require('../models/CategoryModel');
const ProductSliderModel=require('../models/ProductSliderModel');
const ProductModel=require('../models/ProductModel');
const ProductDetailModel=require('../models/ProductDetailModel');
const ProductReviewModel=require('../models/ReviewModel');
const ObjectId = mongoose.Types.ObjectId;//imported mongoose object id to use it in the code

const BrandListService = async () => {
    // Logic to get the list of product brands   
    try{
        let data = await BrandModel.find(); // get all the brands from the database
        return {status:"Success",data:data} // return the data in string format 
    }
    catch(err){
        return {status:"fail",data:err}.toString() // return the error in string format
    }
};

const CategoryListService = async () => {
    try{
        let data = await CategoryModel.find(); // get all the categories from the database
        return {status:"Success",data:data}.toString() // return the data in string format
    }
catch(err){
    return {status:"fail",data:err}.toString() // return the error in string format
}
}

const SliderListService = async () => {
   try{
    let data = await ProductSliderModel.find(); // get all the sliders from the database
    return {status:"Success",data:data} // return the data in string format
    
   }
   catch(err){
    return {status:"fail",data:err}.toString() // return the error in string format
   }

}
const ListByBrandService = async (req) => {
    try {
        let BrandID =new ObjectId(req.params.BrandID);
        let MatchStage = { $match: { brandID: BrandID } };
                
        let JoinWithBrandStage = { $lookup: { from: "brands", localField: "brandID", foreignField: "_id", as: "brand" } }; // join with brand collection to get brand name and logo 
        let JoinWithCategoryStage = { $lookup: { from: "categories", localField: "categoryID", foreignField: "_id", as: "category" } }; // join with category collection to get category name

        let UnwindBrandStage = {$unwind:"$brand"}; // unwind the brand array
        let UnwindCategoryStage = {$unwind:"$category"}; // unwind the category array
         // unwind the category array to get the category name and id in the output 
        let ProjectionStage = {$project:{'brand._id':0,'category._id':0,'categoryID':0,'brandID':0}}; // project the fields to be displayed in the output



        let data = await ProductModel.aggregate([
            MatchStage,
            JoinWithBrandStage,
            JoinWithCategoryStage,
            UnwindBrandStage,
            UnwindCategoryStage,
            ProjectionStage
        ]);

        console.log(data); // Log the data to debug

        return { status: "Success", data: data }; // return the data as an object
    } catch (err) {
        return { status: "fail", data: err }; // return the error as an object
    }
};

const ListByCategoryService = async (req) => {

}

const ListBySimilarService = async () => {

}

const ListByRemarkService = async () => {

}

const DetailsService = async () => {

}

const ReviewListService = async () => {

}


module.exports = {
    BrandListService,
    CategoryListService,
    SliderListService,
    ListByBrandService,
    ListByCategoryService,
    ListBySimilarService,
    ListByRemarkService,
    DetailsService,
    ReviewListService
}
