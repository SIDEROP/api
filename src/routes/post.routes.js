import { Router } from "express";
let router = Router()

// import routes
import {
    userGetAll,
    userPostDelete,
    userPostEdit,
    userPostGet,
    userPostPost 
} from "../controllers/post.contrl.js";


// use routes
router.route("/get").get(userPostGet)
router.route("/post").post(userPostPost)
router.route("/allpost/:_id").post(userGetAll)
router.route("/delete/:id").delete(userPostDelete)
router.route("/put").put(userPostEdit)

export default router