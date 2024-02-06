import { PostModel } from "../models/post.models.js"

// get app post
export let userPostGet = async (req,res)=>{

    let resDb = await PostModel.find()
    res.status(200).json(resDb)
}

// create post user
export let userPostPost = async (req,res)=>{
    let {user_id,title,comment,name} = req.body
    let resDb = await PostModel.create({user_id,title,comment,name})
    res.status(200).json(resDb)
}

// get all profile user post
export let userGetAll = async (req,res)=>{
    if (req.params?._id.length >= 2) {
        let resDb = await PostModel.find({user_id:req.params._id})
        return res.status(200).json(resDb)
    }
    res.status(200).json([])
}

// delete user post
export let userPostDelete = async (req,res)=>{
    let resDb = await PostModel.deleteOne({_id:req.params.id})
    res.status(200).json(resDb)
}


// create post user
export let userPostEdit = async (req,res)=>{
    let {title,comment,_id} = req.body
    let resDb = await PostModel.updateOne({_id:_id},{$set:{title,comment}})
    res.status(200).json(resDb)
}
