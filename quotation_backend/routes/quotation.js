const express=require("express")
const { Validator } = require("express-json-validator-middleware");
const errorHandler = require("../middleware/error_handler");
const { update_line_item_service } = require("../services/line.services");
const {  create_qutations_service, get_all_qutations, get_all_main_items_qutations, get_all_line_items_qutations, create_qutation_service, create_qutation_main_item_service, create_qutation_line_item_service, update_customer_qutation_service, update_main_items_qutation_service, get_qutation_by_id, delete_qutation_service, delete_main_item_qutation_service, delete_line_item_qutation_service, update_status, get_reports, get_reports_by_id } = require("../services/quotation.services");

const quotation_router=express.Router()

const { validate } = new Validator();


quotation_router.get("/",(req,res,next)=>{
    res.send("This is the quotation")
})

quotation_router.post("/insertCustomer/" ,(req,res,next)=>{
    console.log(req.body)
   

        const request_body={
            customer_name:req.body.customer_name,
            address_1:req.body.address_1,
            address_2:req.body.address_2,
            address_3:req.body.address_3,
            city:req.body.city,
            state:req.body.state,
            quotation_date:req.body.quotation_date,
            lead_by:req.body.lead_by,
            lead_by_name:req.body.lead_by_name,
            shop_manager_id:req.body.shop_manager_id,
            mobile_1:req.body.mobile_1,
            mobile_2:req.body.mobile_2,
            mail_id:req.body.mail_id,
            pin_code:req.body.pin_code,
            country:req.body.country,
            customer_id:req.body.customer_id,
            quot_status:req.body.quot_status,
            line_item_details:req.body.line_item_details,
            main_item_details:req.body.main_item_details,
            inserted_by:req.body.inserted_by,
            company_detail_id:req.body.company_detail_id,
            inserted_date:new Date()
        }
        create_qutation_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json(values)
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.post("/insertmainItems/:quotation_id" ,(req,res,next)=>{
    console.log(req.body)
   

        const request_body={
            main_item_details:req.body.main_item_details,
            inserted_by:req.body.inserted_by,
            inserted_date:new Date()
        }
        create_qutation_main_item_service(request_body,req.params)
        .then(values=>{
            console.log(values)
            res.status(200).json(values)
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.post("/insertLineItems/:quotation_id" ,(req,res,next)=>{
    console.log(req.body)
   

        const request_body={
            line_item_details:req.body.line_item_details,
            seq_no:req.body.seq_no,
            inserted_by:req.body.inserted_by,
            inserted_date:new Date()
        }
        create_qutation_line_item_service(request_body,req.params)
        .then(values=>{
            console.log(values)
            res.status(200).json(values)
        })
        .catch(err=>{
        next(err)
        })
})


quotation_router.get("/allQuotations/",(req,res,next)=>{
    const request_body={
        company_detail_id:req.query.company_id
    }
    get_all_qutations(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.get("/get/:id",(req,res,next)=>{
    get_qutation_by_id(req.params.id)
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.get("/mainItems/:id",(req,res,next)=>{
    get_all_main_items_qutations(req.params.id)
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})
quotation_router.get("/lineItems/:id",(req,res,next)=>{
    get_all_line_items_qutations(req.params.id)
        .then(values=>{
            console.log(values)
            res.status(200).json({'values':values})
        })
        .catch(err=>{
        next(err)
        })
})




quotation_router.post("/updateCustomer/:id" ,(req,res,next)=>{
    console.log(req.body)
        const request_body={
            quotation_id:req.params.id,
            customer_name:req.body.customer_name,
            address_1:req.body.address_1,
            address_2:req.body.address_2,
            address_3:req.body.address_3,
            city:req.body.city,
            state:req.body.state,
            lead_by_name:req.body.lead_by_name,
            pin_code:req.body.pin_code,
            country:req.body.country,
            quotation_date:req.body.quotation_date,
            lead_by:req.body.lead_by,
            shop_manager_id:req.body.shop_manager_id,
            mobile_1:req.body.mobile_1,
            mobile_2:req.body.mobile_2,
            mail_id:req.body.mail_id,
            customer_id:req.body.customer_id,
            updated_by:req.body.updated_by,
            updated_date:new Date()
        }
        update_customer_qutation_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json(values)
        })
        .catch(err=>{
        next(err)
        })
})


quotation_router.put("/updateMainItem/:id" ,(req,res,next)=>{
    console.log(req.body)
        const request_body={
            quotation_id:req.params.id,
            seq_no:req.body.seq_no,
            main_item_title:req.body.main_item_title,
            main_item_desc:req.body.main_item_desc,
            main_item_id:req.body.main_item_id,
            room_type:req.body.room_type,
            length:req.body.length,
            height:req.body.height,
            depth:req.body.depth,
            tot_area:req.body.tot_area,
            quantity:req.body.quantity,
            unit_price:req.body.unit_price,
            org_unit_price:req.body.org_unit_price,
            tot_price:req.body.tot_price,
            cgst:req.body.cgst,
            sgst:req.body.sgst,
            igst:req.body.igst,
            net_price:req.body?.net_price,
            disc_price:req.body?.disc_price,
            updated_by:req.body.updated_by,
            updated_date:new Date()
        }
        update_main_items_qutation_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json(values)
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.put("/updateLineItem/:id" ,(req,res,next)=>{
    console.log(req.body)
        const request_body={
            quotation_id:req.params.id,
            seq_no:req.body.seq_no,
            line_seq_no:req.body.line_seq_no,
            line_item_title:req.body.line_item_title,
            line_item_desc:req.body.line_item_desc,
            line_item_id:req.body.line_item_id,
            quantity:req.body.quantity,
            unit_price:req.body.unit_price,
            org_unit_price:req.body.org_unit_price,
            tot_price:req.body.tot_price,
            cgst:req.body.cgst,
            sgst:req.body.sgst,
            igst:req.body.igst,
            net_price:req.body?.net_price,
            disc_price:req.body?.disc_price,
            updated_by:req.body.updated_by,
            updated_date:new Date()
        }
        update_line_item_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json(values)
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.post("/deleteQutation/:id" ,(req,res,next)=>{
    console.log(req)
        const request_body={
            quotation_id:req.params.id
        }
        
        delete_qutation_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({"msg":values})
        })
        .catch(err=>{
        next(err)
        })
})
quotation_router.post("/deleteLineItems/:id" ,(req,res,next)=>{
    console.log(req.body)
        const request_body={
            quotation_id:req.params.id,
            seq_no:req.body.seq_no,
            line_seq_no:req.body.line_seq_no
        }
        delete_line_item_qutation_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({"msg":values})
        })
        .catch(err=>{
        next(err)
        })
})
quotation_router.post("/deleteMainItems/:id" ,(req,res,next)=>{
    console.log(req.body)
        const request_body={
            quotation_id:req.params.id,
            seq_no:req.body.seq_no
        }
        delete_main_item_qutation_service(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({"msg":values})
        })
        .catch(err=>{
        next(err)
        })
})
quotation_router.post("/updateActive/:id" ,(req,res,next)=>{
    console.log(req.body)
        const request_body={
            quotation_id:req.params.id,
            quot_status:req.body.quot_status,
            updated_by:req.body.updated_by,
            company_detail_id:req.body.company_detail_id,
            updated_date:new Date()
        }
        update_status(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({"msg":values})
        })
        .catch(err=>{
        next(err)
        })
})

quotation_router.get("/getReports/:company/:id/" ,(req,res,next)=>{
    console.log(req.params)
        const request_body={
            user_id:req.params.id,
            company_id:req.params.company
            // time:(req.params.time)
        }
        get_reports_by_id(request_body)
        .then(values=>{
            console.log(values)
            res.status(200).json({"values":values})
        })
        .catch(err=>{
        next(err)
        })
})
quotation_router.get("/getReports/:company/" ,(req,res,next)=>{
    const request_body={
        company_id:Number(req.params.company)
    }
    get_reports(request_body)
    .then(values=>{
        console.log(values)
        res.status(200).json({"values":values})
    })
    .catch(err=>{
    next(err)
    })
})

quotation_router.use(errorHandler)

module.exports=quotation_router