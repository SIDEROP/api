import mongoose from "mongoose";

let Schema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

export let PostModel = mongoose.model("Post",Schema) 