const pool = require('../connector/sql_connector');
var format = require('pg-format');
const { create_main_items, create_line_items } = require('../models/quotation.model');

const create_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query("SELECT  quotation_id from quotation ORDER BY quotation_id DESC LIMIT 1").then((results) => {
        var new_quotation_id = 0
        if (results.rows[0]) {
            console.log(results.rows)
            new_quotation_id = Number(results.rows[0].quotation_id)+1
        }
        console.log(new_quotation_id)
        pool.query(`Insert into quotation ("quotation_id", "customer_name","address_1","address_2","address_3","city","state","quotation_date","lead_by","shop_manager_id","mobile_1","mobile_2","mail_id","customer_id","quot_status","pin_code","inserted_by","inserted_date","lead_by_name","country")  
            VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20)`,
            [new_quotation_id, body.customer_name, body.address_1,body.address_2,body.address_3, body.city, body.state,body.quotation_date, body.lead_by,body.shop_manager_id,body.mobile_1, body.mobile_2, body.mail_id,body.customer_id,body.quot_status,body.pin_code,body.inserted_by,body.inserted_date,body.lead_by_name,body.country],
        ).then((val) => {
           resolve({"msg":"Inserted Sucessfully",quotation_id:new_quotation_id})
        }).catch(err => {
            console.log("",err)
            reject(err)
        })
    
    })
    })

    const create_qutation_main_item_service=(body,qu)=>new Promise((resolve,reject)=>{
        pool.query("SELECT  seq_no from quotation_main_item where quotation_id=$1 ORDER BY seq_no DESC LIMIT 1",[qu.quotation_id]).then((results) => {
            var new_seq_no = 0
            if (results.rows[0]) {
                console.log(results.rows)
                new_seq_no = Number(results.rows[0].seq_no)+1
            }
            console.log(new_seq_no,qu)
             pool.query(format(`INSERT into quotation_main_item ("quotation_id","seq_no","room_type","main_item_id","main_item_title","main_item_desc","length","height","depth","tot_area","quantity","unit_price","tot_price","disc_price","net_price","cgst","sgst","igst","org_unit_price","inserted_by","inserted_date","tax_type","main_item_depth") 
            VALUES %L`,create_main_items(qu.quotation_id,body,new_seq_no))).then((res)=>{

           resolve({quotation_id:qu.quotation_id,msg:"Main Items Insereted sucessfuly"})
            }).catch(err => {
            console.log("Main items",err)
            reject(err)
        })
    }).catch(err => {
        console.log("",err)
        reject(err)
    })

    })

    const create_qutation_line_item_service=(body,qu)=>new Promise((resolve,reject)=>{
        pool.query("SELECT  line_seq_no from quotation_line_item where quotation_id=$1 and seq_no=$2 ORDER BY seq_no DESC LIMIT 1",[qu.quotation_id,body.seq_no]).then((results) => {
            var new_line_seq_no = 0
            if (results.rows[0]) {
                console.log(results.rows)
                new_line_seq_no = Number(results.rows[0].line_seq_no)+1
            }
            console.log(new_line_seq_no,qu)
        pool.query(format(`INSERT into quotation_line_item ("quotation_id","seq_no","line_seq_no","line_item_id","line_item_title","line_item_desc","quantity","unit_price","tot_price","disc_price","net_price","cgst","sgst","igst","org_unit_price","inserted_by","inserted_date","tax_type","room_type") 
                    VALUES %L`,create_line_items(qu.quotation_id,body,new_line_seq_no))).then((res)=>{
                        resolve({msg:"Line Items Insereted sucessfuly"})
                    })
                    .catch(err => {
                    console.log(err)
                    reject(err)
                })
            }).catch(err => {
                console.log("",err)
                reject(err)
            })
})


const create_qutations_service=(body)=>new Promise((resolve,reject)=>{
    create_qutation_service(body).then((results)=>{
        if(body.main_item_details.length>0){
            create_qutation_main_item_service(body,results).then(resmain=>{
                if(body.line_item_details.length>0){
                    create_qutation_line_item_service(body,results).then(()=>{
                        resolve("Inserted Sucessfully")
                    }).catch(err=>{
                        console.log(err)
                    reject(err)
                    })
                }
                else{
                    resolve("Saved Sucessfully")
                }
                
            }).catch(err => {
                console.log(err)
                reject(err)})
        }
        else{
            resolve("Saved Sucessfully")
        }
    
}).catch(err => {
    console.log(err)
    reject(err)
})
})



const get_all_qutations=()=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from quotation ORDER BY quotation_id DESC").then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

const get_qutation_by_id=(id)=>new Promise((resolve,reject)=>{
    return pool.query("SELECT * from quotation where quotation_id=$1 ORDER BY quotation_id ASC",[id]).then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

const get_all_main_items_qutations=(id)=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from quotation_main_item where quotation_id=$1 ORDER BY seq_no ASC",[id]).then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

const get_all_line_items_qutations=(id)=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from quotation_line_item where quotation_id=$1 ORDER BY seq_no,line_seq_no ASC",[id]).then((results)=>{
        console.log(results.rows[0],"line")
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})



const update_customer_qutation_service = (body) => new Promise((resolve, reject) => {
 pool.query(`UPDATE quotation SET "customer_name"=$1 , "address_1"=$2,"address_2"=$3,"address_3"=$4,"city"=$5,"state"=$6,"quotation_date"=$7,"lead_by"=$8,"shop_manager_id"=$9,"mobile_1"=$10,"mobile_2"=$11,"mail_id"=$12,"pin_code"=$13,"updated_by"=$14,"updated_date"=$15,"country"=$16,"lead_by_name"=$17 WHERE "quotation_id" = $18`,
    [ body.customer_name, body.address_1, body.address_2,body.address_3,body.city, body.state, body.quotation_date,body.lead_by,body.shop_manager_id,body.mobile_1,body.mobile_2,body.mail_id,body.pin_code,body.updated_by,body.updated_date,body.country,body.lead_by_name,body.quotation_id],)
    .then((results) => {
        if(results.rowCount>0){
            console.log(results)
            resolve("Update SucessFully")
        }
        else{
            reject("Id is wrong")
        }
        
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})



const update_main_items_qutation_service = (body) => new Promise((resolve, reject) => {
 pool.query(`UPDATE quotation_main_item SET "org_unit_price"=$1 , "main_item_title"=$2,"main_item_desc"=$3,"main_item_id"=$4,"room_type"=$5,"length"=$6,"height"=$7,"depth"=$8,"tot_area"=$9,"quantity"=$10,"unit_price"=$11,"tot_price"=$12,"cgst"=$13,"sgst"=$14,"igst"=$15,"net_price"=$16,"disc_price"=$17,"updated_by"=$18,"updated_date"=$19 WHERE "quotation_id" = $20 and "seq_no"=$21`,
    [ body.org_unit_price, body.main_item_title, body.main_item_desc,body.main_item_id,body.room_type, body.length, body.height,body.depth,body.tot_area,body.quantity,body.unit_price,body.tot_price,body.cgst,body.sgst,body.igst,body.net_price,body.disc_price,body.updated_by,body.updated_date,body.quotation_id,body.seq_no],)
    .then((results) => {
        console.log(results)
            resolve("Update SucessFully")
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})


const update_line_items_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query(`UPDATE quotation_line_item SET "line_item_title"=$1 , "line_item_desc"=$2,"line_item_id"=$3,"quantity"=$4,"unit_price"=$5,"org_unit_price"=$6,"tot_price"=$7,"cgst"=$8,"sgst"=$9,"igst"=$10,"net_price"=$11,"disc_price"=$12,"updated_by"=$13,"updated_date"=$14, WHERE "quotation_id" = $15 and "seq_no"=$16 and "line_seq_no"=$17`,
       [ body.line_item_title, body.line_item_desc, body.line_item_id,body.quantity,body.unit_price, body.org_unit_price, body.tot_price,body.cgst,body.sgst,body.igst,body.net_price,body.disc_price,body.updated_by,body.updated_date,body.quotation_id,body.seq_no,body.line_seq_no],)
       .then((results) => {
        if(results.rowCount>0){

           console.log(results)
               resolve("Update SucessFully")
        }
        resolve("Cannot be updated")
       }).catch(err => {
           console.log(err)
           reject( err)
       })
   })

const delete_qutation_service = (body)=>new Promise((resolve,reject)=>{
    pool.query(`DELETE FROM quotation WHERE "quotation_id" = $1 and "quot_status"='Drafted' `,[body.quotation_id]).then((results)=>{
        pool.query(`DELETE FROM quotation_main_item WHERE "quotation_id" = $1`,[body.quotation_id]).then((results)=>{
       pool.query(`DELETE FROM quotation_line_item WHERE "quotation_id" = $1`,[body.quotation_id]).then((results)=>{
           resolve("Deleted SucessFully")
       }).catch(err => {   
           console.log(err)
           reject( err)
       })}).catch(err => {   
        console.log(err)
        reject( err)
    })
       }).catch(err => {   
           console.log(err)
           reject( err)
       })
   
   })

   const delete_main_item_qutation_service = (body)=>new Promise((resolve,reject)=>{
 pool.query(`DELETE FROM quotation_main_item WHERE "quotation_id" = $1 and "seq_no"=$2`,[body.quotation_id,body.seq_no]).then((results)=>{
    pool.query(`DELETE FROM quotation_line_item WHERE "quotation_id" = $1`,[body.quotation_id]).then((results)=>{
        resolve("Deleted SucessFully")
    }).catch(err => {   
        console.log(err)
        reject( err)
    })
    }).catch(err => {   
        console.log(err)
        reject( err)
    })

})

const delete_line_item_qutation_service = (body)=>new Promise((resolve,reject)=>{
       pool.query(`DELETE FROM quotation_line_item WHERE "quotation_id" = $1 and "seq_no"=$2 and "line_seq_no"=$3`,[body.quotation_id,body.seq_no,body.line_seq_no,]).then((results)=>{
           resolve("Deleted SucessFully")
       }).catch(err => {   
           console.log(err)
           reject( err)
       })
   })

const update_status=(body)=>new Promise((resolve, reject) => {
    pool.query("SELECT  quotation_code from quotation where quotation_code!=Null ORDER BY quotation_code DESC LIMIT 1").then((results) => {
        var new_quotation_code = 0
        if (results.rows[0]) {
            console.log(results.rows)
            new_quotation_code = Number(results.rows[0].quotation_code)+1
        }
        console.log(new_quotation_code)
        pool.query(`UPDATE quotation SET "quotation_code"=$1 , "quot_status"=$2,"updated_by"=$3,"updated_date"=$4 WHERE "quotation_id" = $5`,
        [ new_quotation_code, body.quot_status,body.updated_by,body.updated_date,body.quotation_id],)
        .then((results) => {
            if(results.rowCount>0){
                console.log(results)
                resolve("Update SucessFully")
            }
            else{
                reject("Id is wrong")
            }
            
        }).catch(err => {
            console.log(err)
            reject( err)
        })
    }).catch(err => {
        console.log("",err)
        reject(err)
    })

})


module.exports={update_status,delete_qutation_service,delete_main_item_qutation_service,delete_line_item_qutation_service,get_qutation_by_id,update_customer_qutation_service,update_line_items_qutation_service,update_main_items_qutation_service,create_qutations_service,create_qutation_service,create_qutation_main_item_service,create_qutation_line_item_service,get_all_qutations,get_all_main_items_qutations,get_all_line_items_qutations}