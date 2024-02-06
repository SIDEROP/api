// multer 
import { upload } from "../middlewares/multer.js";
import { Router } from "express";
let router = Router()

// import routes
import {
    userDataAdd,
    userGet,
    userPost 
} from "../controllers/user.contrl.js";

// use routes

router.route("/post").post(userGet)
router.route("/create").post(upload.single("file"),userPost)
router.route("/new").post(userDataAdd)


export default router