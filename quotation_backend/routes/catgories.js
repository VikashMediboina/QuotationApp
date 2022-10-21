const express=require("express")

const catgories_router=express.Router()



catgories_router.get("/",(req,res,next)=>{
    res.send("This is the catogaries")
})
module.exports=catgories_router