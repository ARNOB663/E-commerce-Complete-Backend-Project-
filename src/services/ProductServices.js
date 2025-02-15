const BrandModel=require('../models/BrandModel');
const CategoryModel=require('../models/CategoryModel');
const ProductSliderModel=require('../models/ProductSliderModel');
const ProductModel=require('../models/ProductModel');
const ProductDetailModel=require('../models/ProductDetailModel');
const ProductReviewModel=require('../models/ReviewModel');

const BrandListService = async () => {
    // Logic to get the list of product brands   
    try{
        let data = await BrandModel.find(); // get all the brands from the database
        return {status:"Success",data:data}.toString() // return the data in string format 
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
    return {status:"Success",data:data}.toString() // return the data in string format
    
   }
   catch(err){
    return {status:"fail",data:err}.toString() // return the error in string format
   }

}

const ListByBrandService = async () => {
    
}

const ListByCategoryService = async () => {

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
