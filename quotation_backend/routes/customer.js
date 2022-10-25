const express=require("express")
var bodyParser = require('body-parser')
const { Validator } = require("express-json-validator-middleware");
const { create_customer_service, update_customer_service, get_all_customer } = require("../services/customer.service");
const { customer_create_schema, customer_update_schema } = require("../models/customer.modal");



const customer_router=express.Router()

// customer_router.use(bodyParser.json({ type: 'application/*+json' }))

const { validate } = new Validator();

customer_router.get("/",(req,res,next)=>{
    res.send("This is the customer")
})

customer_router.post("/insert/",validate({ body: customer_create_schema }),(req,res,next)=>{
    console.log(req.body)

        const request_body={
            customer_name:req.body.customer_name,
            customer_email:req.body.customer_email,
            customer_phone_number:req.body.customer_phone_number,
            customer_alt_phone_number:req.body.customer_alt_phone_number,
            inserted_by:req.body.inserted_by,
            address_1:req.body.address_1,
            address_2:req.body.address_2,
            address_3:req.body.address_3,
            city:req.body.city,
            state:req.body.state,
            country:req.body.country,
            inserted_date:new Date(),
        }

        create_customer_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})

customer_router.get("/get/",(req,res,next)=>{
    console.log(req.body)

    get_all_customer()
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

customer_router.put("/update/:id",validate({ body: customer_update_schema }),(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        customer_id: req.params.id,
        customer_name:req.body.customer_name,
        customer_email:req.body.customer_email,
        customer_phone_number:req.body.customer_phone_number,
        customer_alt_phone_number:req.body.customer_alt_phone_number,
        address_id:req.body.address_id,
        address_1:req.body.address_1,
        address_2:req.body.address_2,
        address_3:req.body.address_3,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }
    update_customer_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})


module.exports=customer_router