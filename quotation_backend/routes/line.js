const express=require("express")

const line_router=express.Router()



line_router.get("/",(req,res,next)=>{
    res.send("This is the line")
})
module.exports=line_router