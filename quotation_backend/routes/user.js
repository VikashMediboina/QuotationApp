const express=require("express")
const { login_user_service, update_password_service } = require("../services/user.service")
const { Validator } = require("express-json-validator-middleware");
const {  login_update_password_model } = require("../models/user.model");

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
    update_password_service(req.body).then(values=>{
        // console.log(values)
        res.status(200).json(values)
    })
    .catch(err=>{
    next(err)
    }) 
})

module.exports=user_router