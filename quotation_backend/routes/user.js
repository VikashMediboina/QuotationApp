const express=require("express")
const { login_user_service, update_password_service } = require("../services/user.service")
const { Validator } = require("express-json-validator-middleware");
const {  login_update_password_model } = require("../models/user.model");
const errorHandler = require("../middleware/error_handler");

const user_router=express.Router()

const { validate } = new Validator();


user_router.get("/",(req,res,next)=>{
    res.send("This is the user")
})

user_router.post("/login",validate({ body: login_update_password_model }),(req,res,next)=>{
    login_user_service(req.body).then(values=>{
        // console.log(values)
        res.status(200).json(values)
    })
    .catch(err=>{
    next(err)
    }) 
})
user_router.post("/updatePassword",validate({ body: login_update_password_model }),(req,res,next)=>{
    const request_body={
        employee_email:req.body.employee_email,
        employee_password:req.body.employee_password,
        updated_by:req.body.updated_by,
        updated_date:new Date()
    }
    update_password_service(request_body).then(values=>{
        // console.log(values)
        res.status(200).json(values)
    })
    .catch(err=>{
    next(err)
    }) 
})
user_router.use(errorHandler)

module.exports=user_router