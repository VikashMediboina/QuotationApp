const express=require("express")
const { catgories_create_schema, catgories_update_schema } = require("../models/catgories.model")

const catgories_router=express.Router()



catgories_router.get("/",(req,res,next)=>{
    res.send("This is the catogaries")
})



catgories_router.post("/insert/",validate({ body: catgories_create_schema }),(req,res,next)=>{
    console.log(req.body)

        const request_body={
            catogerie_title:req.body.catogerie_title,
            catgories_desc:req.body.catgories_desc,
            inserted_by:req.body.inserted_by,
            inserted_date:new Date()
        }
        create_company_service(request_body)
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

    get_all_company()
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
        company_id:req.params.id,
        catogerie_title:req.body.catogerie_title,
        catgories_desc:req.body.catgories_desc,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }

    update_company_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})


module.exports=catgories_router