const express=require("express")
const { Validator } = require("express-json-validator-middleware");
const errorHandler = require("../middleware/error_handler");
const { line_item_create_schema, line_item_update_schema } = require("../models/line.model");
const { create_line_item_service, get_all_line_items, update_line_item_service, delete_line_item_service } = require("../services/line.services");

const line_router=express.Router()
const { validate } = new Validator();



line_router.get("/",(req,res,next)=>{
    res.send("This is the line")
})




line_router.post("/insert/",validate({ body: line_item_create_schema }),(req,res,next)=>{
    console.log(req.body)

        const request_body={
            line_item_title:req.body.line_item_title,
            line_item_desc:req.body.line_item_desc,
            tax_type:req.body.tax_type,
            room_type:req.body.room_type,
            unit_price:req.body.unit_price,
            inserted_by:req.body.inserted_by,
            inserted_date:new Date()
        }
        create_line_item_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})

line_router.get("/get/",(req,res,next)=>{
    console.log(req.body)

    get_all_line_items()
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

line_router.put("/update/:id",validate({ body: line_item_update_schema }),(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        line_item_id:req.params.id,
        line_item_title:req.body.line_item_title,
        line_item_desc:req.body.line_item_desc,
        tax_type:req.body.tax_type,
        room_type:req.body.room_type,
        unit_price:req.body.unit_price,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }

    update_line_item_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})
line_router.post("/delete/:id",(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        line_item_id:req.params.id
    }

    delete_line_item_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})
line_router.use(errorHandler)

module.exports=line_router