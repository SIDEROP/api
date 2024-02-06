import { userModel } from "../models/user.models.js"

// authenticatio
export let userGet = async (req,res)=>{
    let {username,password} = req.body
    
    let resDb = await userModel.findOne({username,password})
    res.status(200).json(resDb)
}


// create user account
export let userPost = async (req,res)=>{
    let {username,password} = req.body
    if (!username && !password) {
        res.status(200).json(null)
    }
    let resDb = await userModel.findOne({username})
    if (!resDb) {
        let dbret = await userModel.create({username,password})
        res.status(200).json(dbret)
    } else{
        res.status(200).json(null)
    }
    
}


// set user routes

export let userDataAdd = async (req,res)=>{
    let {_id,name,status} = req.body
    
    let dbret = await userModel.updateOne({_id},{$set:{name,status}})
    console.log(dbret.acknowledged)
    res.status(200).json(dbret)
}