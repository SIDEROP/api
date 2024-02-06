import "dotenv/config"
import mongoose from "mongoose";

export let db = async ()=>{
    try {
        let connection = await mongoose.connect(process.env.DB_CONNECT)
        console.log(`mongodb connected successfully... ${connection?.connection?.host}`)
    } catch (error) {
        console.log("mongodb not connect")
        throw error
        process.exit(1)
    }
}


// "mongodb://localhost:27017/twitter"
// process.env.DB_CONNECT