const mongoose = require("mongoose");
const DataSchema = new mongoose.Schema({
   store_id:{type:String, required:true},
   store_passwd:{type:String, required:true},
   currency:{type:String, required:true},
    success_url:{type:String, required:true},
    fail_url:{type:String, required:true},
    cancel_url:{type:String, required:true},
    //ipn url is the url where the payment gateway will send the payment status to the merchant
    ipn_url:{type:String, required:true},
    //init url is the url where the payment gateway will send the payment status to the merchant
    init_url:{type:String, required:true},
   
});

const PaymentSettingsModel = mongoose.model("paymentSettings", DataSchema);

module.exports = PaymentSettingsModel;