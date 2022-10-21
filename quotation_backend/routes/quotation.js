const express=require("express")

const quotation_router=express.Router()



quotation_router.get("/",(req,res,next)=>{
    res.send("This is the quotation")
})

module.exports=quotation_router