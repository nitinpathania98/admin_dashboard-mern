import mongoose from "mongoose";
// const mongoose = require("mongoose")
const UserSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    productname:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    discount:{
        type:String,
        required:true,
    }
})
const UserAddProduct = mongoose.model("User3",UserSchema);
export default UserAddProduct;