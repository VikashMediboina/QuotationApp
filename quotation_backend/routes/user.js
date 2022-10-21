const express=require("express")

const user_router=express.Router()



user_router.get("/",(req,res,next)=>{
    res.send("This is the user")
})
module.exports=user_router