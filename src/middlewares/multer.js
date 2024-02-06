import multer from "multer";

export let upload = multer({
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'./upload')
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname)
        }
    })
})