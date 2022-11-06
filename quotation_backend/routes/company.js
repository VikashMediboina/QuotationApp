const express=require("express")
const { create_company_service, get_all_company, update_company_service, delete_company_service } = require("../services/company.services")
var bodyParser = require('body-parser')
const {  company_create_schema, company_update_schema } = require("../models/company.model")
const { Validator } = require("express-json-validator-middleware");



const company_router=express.Router()

// company_router.use(bodyParser.json({ type: 'application/*+json' }))

const { validate } = new Validator();

company_router.get("/",(req,res,next)=>{
    res.send("This is the company")
})

company_router.post("/insert/",validate({ body: company_create_schema }),(req,res,next)=>{
    console.log(req.body)

        const request_body={
            company_code:req.body.company_code,
            company_name:req.body.company_name,
            location:req.body.location,
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

company_router.get("/get/",(req,res,next)=>{
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

company_router.put("/update/:id",validate({ body: company_update_schema }),(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        company_id:req.params.id,
        company_code:req.body.company_code,
        company_name:req.body.company_name,
        location:req.body.location,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }

    update_company_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})

company_router.post("/delete/:id",(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        company_id:req.params.id
    }

    delete_company_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})


module.exports=company_router