const pool = require('../connector/sql_connector');
var format = require('pg-format');
const { create_main_items, create_line_items } = require('../models/quotation.model');
const { get_employees_under_service } = require('./employee.service');

const create_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query("SELECT  quotation_id from quotation ORDER BY quotation_id DESC LIMIT 1").then((results) => {
        var new_quotation_id = 0
        if (results.rows[0]) {
            console.log(results.rows)
            new_quotation_id = Number(results.rows[0].quotation_id)+1
        }
        console.log(new_quotation_id)
        pool.query(`Insert into quotation ("quotation_id", "customer_name","address_1","address_2","address_3","city","state","quotation_date","lead_by","shop_manager_id","mobile_1","mobile_2","mail_id","customer_id","quot_status","pin_code","inserted_by","inserted_date","lead_by_name","country","company_detail_id","version","status")  
            VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23)`,
            [new_quotation_id, body.customer_name, body.address_1,body.address_2,body.address_3, body.city, body.state,body.quotation_date, body.lead_by,body.shop_manager_id,body.mobile_1, body.mobile_2, body.mail_id,body.customer_id,body.quot_status,body.pin_code,body.inserted_by,body.inserted_date,body.lead_by_name,body.country,body.company_detail_id,0,body.status],
        ).then((val) => {
           resolve({"msg":"Quotation saved as Draft",quotation_id:new_quotation_id})
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
             pool.query(format(`INSERT into quotation_main_item ("quotation_id","seq_no","room_type","main_item_id","main_item_title","main_item_desc","length","height","depth","tot_area","quantity","unit_price","tot_price","disc_price","net_price","cgst","sgst","igst","org_unit_price","inserted_by","inserted_date","tax_type","main_item_depth","version","status") 
            VALUES %L`,create_main_items(qu.quotation_id,body,new_seq_no))).then((res)=>{

           resolve({quotation_id:qu.quotation_id,msg:"Main Items Insereted Successfully"})
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
        pool.query("SELECT  line_seq_no from quotation_line_item where quotation_id=$1 and seq_no=$2 ORDER BY line_seq_no DESC LIMIT 1",[Number(qu.quotation_id),body.seq_no]).then((results) => {
            var new_line_seq_no = 0
            if (results.rows[0]) {
                console.log(results.rows)
                new_line_seq_no = Number(results.rows[0].line_seq_no)+1
            }
            console.log(new_line_seq_no,qu,results,"ggyggtgt")
        pool.query(format(`INSERT into quotation_line_item ("quotation_id","seq_no","line_seq_no","line_item_id","line_item_title","line_item_desc","quantity","unit_price","tot_price","disc_price","net_price","cgst","sgst","igst","org_unit_price","inserted_by","inserted_date","tax_type","room_type","version","status") 
                    VALUES %L`,create_line_items(qu.quotation_id,body,new_line_seq_no))).then((res)=>{
                        resolve({msg:"Line Items Insereted Successfully"})
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



const get_all_qutations=(body)=> new Promise((resolve,reject)=>{
    return pool.query(
        `with current_ver as (
            select quotation_id, max(version) as version
            from quotation
            group by quotation_id
          )
          SELECT q.* from quotation q  
          inner join current_ver c on c.quotation_id = q.quotation_id 
          and c.version = q.version
          where q.company_detail_id=$1 and q.status!='DELETED'
          ORDER BY quotation_id ASC`
         ,[body.company_detail_id]).then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

const get_qutation_by_id=(id)=>new Promise((resolve,reject)=>{
    return pool.query(
        `with current_ver as (
            select quotation_id, max(version) as version
            from quotation
            group by quotation_id
          )
          SELECT q.* from quotation q  
          inner join current_ver c on c.quotation_id = q.quotation_id 
          and c.version = q.version
          where q.quotation_id=$1 and q.status!='DELETED'
          ORDER BY quotation_id ASC`
        ,[id]).then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

const get_all_main_items_qutations=(id)=> new Promise((resolve,reject)=>{
    return pool.query(`with current_ver as (
        select quotation_id,seq_no, max(version) as version
        from quotation_main_item
        group by quotation_id,seq_no
      )
      SELECT q.* from quotation_main_item q  
      inner join current_ver c on c.quotation_id = q.quotation_id 
      and c.seq_no = q.seq_no and c.version = q.version
      where q.quotation_id=$1 and q.status!='DELETED'
      ORDER BY q.seq_no ASC`,[id]).then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

const get_all_line_items_qutations=(id)=> new Promise((resolve,reject)=>{
    return pool.query(`with current_ver as (
        select line_seq_no,quotation_id,seq_no, max(version) as version
        from quotation_line_item
        group by quotation_id,seq_no,line_seq_no
      )
      SELECT q.* from quotation_line_item q  
      inner join current_ver c on c.quotation_id = q.quotation_id 
      and c.seq_no = q.seq_no and c.line_seq_no = q.line_seq_no and c.version = q.version
      where q.quotation_id=$1 and q.status!='DELETED'
      ORDER BY q.seq_no,q.line_seq_no ASC `,[id]).then((results)=>{
        console.log(results.rows[0],"line")
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})



const update_customer_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query("SELECT  version from quotation where quotation_id=$1 ORDER BY version DESC LIMIT 1",[Number(body.quotation_id)]).then((results) => {
        var version = 0
        if (results.rows[0]) {
            console.log(results.rows)
            version = Number(results.rows[0].version)+1
        }
        console.log(version)
 pool.query(`Insert into quotation ("quotation_id", "customer_name","address_1","address_2","address_3","city","state","quotation_date","lead_by","shop_manager_id","mobile_1","mobile_2","mail_id","customer_id","quot_status","pin_code","inserted_by","inserted_date","lead_by_name","country","company_detail_id","version","status","comment")  
 VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24)`,
 [body.quotation_id, body.customer_name, body.address_1,body.address_2,body.address_3, body.city, body.state,body.quotation_date, body.lead_by,body.shop_manager_id,body.mobile_1, body.mobile_2, body.mail_id,body.customer_id,body.quot_status,body.pin_code,body.updated_by,body.updated_date,body.lead_by_name,body.country,body.company_detail_id,version,body.status,body.comment],)
    .then((results) => {
        if(results.rowCount>0){
            if(body.quot_status=="Active"){
                 update_status(body,version).then(val=>{
                    resolve(val)
                }).catch(err => {
                    console.log(err)
                    reject( err)
                })
            }
            else{
                console.log(results)
                resolve("Update SucessFully")
            }
            
        }
        else{
            reject("Id is wrong")
        }
        
    }).catch(err => {
        console.log(err)
        reject( err)
    })
}).catch(err => {
    console.log(err)
    reject( err)
})
})



const update_main_items_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query("SELECT  version from quotation_main_item where quotation_id=$1 and seq_no=$2 ORDER BY version DESC LIMIT 1",[Number(body.quotation_id),body.seq_no]).then((results) => {
        var main_version = 0
        if (results.rows[0]) {
            console.log(results.rows)
            main_version = Number(results.rows[0].version)+1
        }
        console.log(main_version)
 pool.query(`INSERT into quotation_main_item ("quotation_id","seq_no","room_type","main_item_id","main_item_title","main_item_desc","length","height","depth","tot_area","quantity","unit_price","tot_price","disc_price","net_price","cgst","sgst","igst","org_unit_price","inserted_by","inserted_date","tax_type","main_item_depth","version","status") 
 VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25)`,
    [ body.quotation_id,body.seq_no,body.room_type,body.main_item_id, body.main_item_title, body.main_item_desc, body.length, body.height,body.depth,body.tot_area,body.quantity,body.unit_price,body.tot_price,body.disc_price,body.net_price,body.cgst,body.sgst,body.igst,body.org_unit_price,body.updated_by,body.updated_date,body.tax_type,body.main_item_depth,main_version,body.status],)
    .then((results) => {
        console.log(results)
            resolve("Update SucessFully")
    }).catch(err => {
        console.log(err)
        reject( err)
    })
}).catch(err => {
    console.log(err)
    reject( err)
})
})


const update_line_items_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query("SELECT  version from quotation_line_item where quotation_id=$1 and seq_no=$2 and line_seq_no=$3 ORDER BY version DESC LIMIT 1",[Number(body.quotation_id),body.seq_no,body.line_seq_no]).then((results) => {
        var line_version = 0
        if (results.rows[0]) {
            console.log(results.rows)
            line_version = Number(results.rows[0].version)+1
        }
        console.log(line_version)
    pool.query(`INSERT into quotation_line_item ("quotation_id","seq_no","line_seq_no","line_item_id","line_item_title","line_item_desc","quantity","unit_price","tot_price","disc_price","net_price","cgst","sgst","igst","org_unit_price","inserted_by","inserted_date","tax_type","room_type","version","status")
    VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21)`,
       [body.quotation_id,body.seq_no,body.line_seq_no,body.line_item_id, body.line_item_title, body.line_item_desc,body.quantity,body.unit_price, body.tot_price,body.disc_price,body.net_price,body.cgst,body.sgst,body.igst,body.org_unit_price,body.updated_by,body.updated_date,body.tax_type,body.room_type,line_version,body.status],)
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
    }).catch(err => {
        console.log(err)
        reject( err)
    })
   })

const delete_qutation_service = (body)=>new Promise((resolve,reject)=>{
        pool.query(`DELETE FROM quotation_main_item WHERE "quotation_id" = $1`,[body.quotation_id]).then((results)=>{
            console.log(results)

       pool.query(`DELETE FROM quotation_line_item WHERE "quotation_id" = $1`,[body.quotation_id]).then((results)=>{
        // console.log(results)

    pool.query(`DELETE FROM quotation WHERE "quotation_id" = $1 and "quot_status"='Drafted' `,[body.quotation_id]).then((results)=>{
        if(results.rowCount>0){
            console.log(results)
           resolve("Deleted SucessFully")
        }
        else{
            reject("Id is wrong")
        }
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

const update_status=(body,version)=>new Promise((resolve, reject) => {
    pool.query("SELECT  quotation_code from quotation where quotation_code IS NOT NULL AND company_detail_id=$1 ORDER BY quotation_code DESC LIMIT 1",[body.company_detail_id]).then((results) => {
        var new_quotation_code = 0
        console.log(results.rows[0])
        if (results.rows[0]) {
            console.log(results.rows)
            new_quotation_code = Number(results.rows[0].quotation_code)+1
        }
        console.log(new_quotation_code)
        pool.query(`UPDATE quotation SET "quotation_code"=$1 WHERE "quotation_id" = $2 and "version"=$3`,
        [ new_quotation_code,body.quotation_id,version],)
        .then((results) => {
            if(results.rowCount>0){
                console.log(results)
                resolve({msg:"Update SucessFully"})
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

const get_reports_by_id=(body)=>new Promise((resolve, reject) =>{
    get_employees_under_service(body.user_id,body.company_id).then(results=>{
        let users=[]
        console.log(results)
        for(let i=0;i<results.length;i++){
            users.push(results[i].employee_id)
            }
        pool.query(
            `with current_ver as (
                select quotation_id, max(version) as version
                from quotation
                group by quotation_id
              )
              SELECT COUNT(q.quotation_id),q.quot_status from quotation q  
              inner join current_ver c on c.quotation_id = q.quotation_id 
              and c.version = q.version
              where lead_by=ANY($1::int[]) and q.company_detail_id=$2
              group by quot_status`
           ,[users,body.company_id]).then((results) => {
            console.log(results.rows)
            resolve(results.rows)
        }).catch(err => {
            console.log("",err)
            reject(err)
        })
    }).catch(err => {
        console.log("",err)
        reject(err)
    })
})
const get_reports=(body)=>new Promise((resolve, reject) =>{
    
    pool.query(
        `with current_ver as (
            select quotation_id, max(version) as version
            from quotation
            group by quotation_id
          )
          SELECT COUNT(q.quotation_id),q.quot_status from quotation q  
          inner join current_ver c on c.quotation_id = q.quotation_id 
          and c.version = q.version
          where q.company_detail_id=$1 
          group by quot_status
          `,[body.company_id]).then((results) => {
        console.log(results)
        resolve(results.rows)
    }).catch(err => {
        console.log("",err)
        reject(err)
    })

})

module.exports={get_reports,get_reports_by_id,update_status,delete_qutation_service,delete_main_item_qutation_service,delete_line_item_qutation_service,get_qutation_by_id,update_customer_qutation_service,update_line_items_qutation_service,update_main_items_qutation_service,
    create_qutations_service,create_qutation_service,create_qutation_main_item_service,create_qutation_line_item_service,get_all_qutations,get_all_main_items_qutations,get_all_line_items_qutations}