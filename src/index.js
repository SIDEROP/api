import "dotenv/config.js"
import {db} from "./db/connect.js"
import {app} from './app.js'



db()
.then(()=>{
    app.listen(process.env.NODE_PORT || 8000)
    console.log(`server is run ${process.env.NODE_PORT} port`) 
})