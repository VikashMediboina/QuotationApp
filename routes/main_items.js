const express=require("express")
const { create_main_item } = require("../connector/crate_queries")
const { main_item_create_schema, main_item_update_schema } = require("../models/main_items.model")
const { update_main_item_service, get_all_main_items, create_main_item_service } = require("../services/main_items.services")
const { Validator } = require("express-json-validator-middleware");

const main_items_router=express.Router()

const { validate } = new Validator();


main_items_router.get("/",(req,res,next)=>{
    res.send("This is the main")
})




main_items_router.post("/insert/",validate({ body: main_item_create_schema }),(req,res,next)=>{
    console.log(req.body)

        const request_body={
            main_item_title:req.body.main_item_title,
            main_item_desc:req.body.main_item_desc,
            room_type:req.body.room_type,
            unit_price:req.body.unit_price,
            inserted_by:req.body.inserted_by,
            inserted_date:new Date()
        }
        create_main_item_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})

main_items_router.get("/get/",(req,res,next)=>{
    console.log(req.body)

    get_all_main_items()
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

main_items_router.put("/update/:id",validate({ body: main_item_update_schema }),(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        main_item_id:req.params.id,
        main_item_title:req.body.main_item_title,
        main_item_desc:req.body.main_item_desc,
        room_type:req.body.room_type,
        unit_price:req.body.unit_price,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }

    update_main_item_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})






module.exports=main_items_router