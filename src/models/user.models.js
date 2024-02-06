import mongoose from "mongoose";

let Schema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        index:true,
        trim:true
    },
    name:{
        type:String,
    },
    status:{
        type:String,
    },
    password:{
        type:String,
        required:true
    }
})


export let userModel = mongoose.model("User",Schema)