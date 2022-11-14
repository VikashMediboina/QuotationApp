const express=require("express")
const { catgories_create_schema, catgories_update_schema } = require("../models/catgories.model")
const { Validator } = require("express-json-validator-middleware");
const { update_catogerie_service, create_catogerie_service, get_all_catogeries, delete_catogerie_item_service } = require("../services/catgories.services");
const errorHandler = require("../middleware/error_handler");


const catgories_router=express.Router()


const { validate } = new Validator();


catgories_router.get("/",(req,res,next)=>{
    res.send("This is the catogaries")
})



catgories_router.post("/insert/",validate({ body: catgories_create_schema }),(req,res,next)=>{
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

catgories_router.get("/get/",(req,res,next)=>{
    console.log(req.body)

    get_all_catogeries()
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

catgories_router.put("/update/:id",validate({ body: catgories_update_schema }),(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        catogerie_id:req.params.id,
        catogerie_title:req.body.catogerie_title,
        catogerie_desc:req.body.catogerie_desc,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }

    update_catogerie_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})
catgories_router.post("/delete/:id",(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        catogerie_id:req.params.id
    }

    delete_catogerie_item_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})
catgories_router.use(errorHandler)


module.exports=catgories_router