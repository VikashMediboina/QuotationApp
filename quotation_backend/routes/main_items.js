const express=require("express")

const main_items_router=express.Router()



main_items_router.get("/",(req,res,next)=>{
    res.send("This is the main")
})
module.exports=main_items_router