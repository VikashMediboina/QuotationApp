const express=require("express")
const { employee_create_schema, employee_update_schema } = require("../models/employee.model")
const { Validator } = require("express-json-validator-middleware");
const { get_all_employees, update_employment_service, create_employment_service } = require("../services/employement.service")

const employee_router=express.Router()

const { validate } = new Validator();


employee_router.get("/",(req,res,next)=>{
    res.send("This is the employee")
})



employee_router.post("/insert/",validate({ body: employee_create_schema }),(req,res,next)=>{
    console.log(req.body)

        const request_body={
            employee_code: req.body?.employee_code,
            employee_name: req.body?.employee_name,
            birth_date:req.body?.birth_date,
            gender:req.body?.gender,
            employee_email: req.body?.employee_email,
            password:(req.body?.password),
            employee_phone_number: req.body?.employee_phone_number,
            past_exp:req.body?.past_exp,
            emp_status:req.body?.emp_status,
            emp_type:req.body?.emp_type,
            reporting_to:req.body?.reporting_to,
            company_id: req.body?.company_id,
            job_code: req.body?.job_code,
            start_date:req.body?.start_date,
            stop_date:req.body?.stop_date,
            inserted_by: req.body?.inserted_by,
            inserted_date:new Date(),
        }

        create_employment_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({'msg':values})
        })
        .catch(err=>{
        next(err)
        })
})

employee_router.get("/get/",(req,res,next)=>{
    console.log(req.body)

    get_all_employees()
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

employee_router.put("/update/:id",validate({ body: employee_update_schema }),(req,res,next)=>{
    console.log(req.body,req.params.id)
    const request_body={
        employee_id:req.params.id,
        employee_code: req.body?.employee_code,
        employee_name: req.body?.employee_name,
        birth_date:req.body?.birth_date,
        gender:req.body?.gender,
        employment_id:req.body?.employment_id,
        employee_email: req.body?.employee_email,
        employee_phone_number: req.body?.employee_phone_number,
        past_exp:req.body?.past_exp,
        emp_status:req.body?.emp_status,
        emp_type:req.body?.emp_type,
        reporting_to:req.body?.reporting_to,
        company_id: req.body?.company_id,
        job_code: req.body?.job_code,
        start_date:req.body?.start_date,
        stop_date:req.body?.stop_date,
        updated_by:req.body?.updated_by,
        updated_date:new Date()
    }
    update_employment_service(request_body)
        .then(values=>{
            // console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})



module.exports=employee_router