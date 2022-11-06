const express=require("express")
const { Validator } = require("express-json-validator-middleware");

const quotation_router=express.Router()

const { validate } = new Validator();


quotation_router.get("/",(req,res,next)=>{
    res.send("This is the quotation")
})

quotation_router.post("/insert/" ,(req,res,next)=>{
    console.log(req.body)

        const request_body={
            catogerie_title:req.body.catogerie_title,
            catogerie_desc:req.body.catogerie_desc,
            inserted_by:req.body.inserted_by,
            inserted_date:new Date()
        }
        create_catogerie_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})

module.exports=quotation_router