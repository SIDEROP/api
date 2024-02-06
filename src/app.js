import express from "express";
import cors from "cors"
let app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("dist"))

// import router
import Userrouter from "./routes/user.routes.js"
import Postrouter from "./routes/post.routes.js"

//use routes
app.use('/api/user',Userrouter)
app.use('/api/post',Postrouter)


export {app} 