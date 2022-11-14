const { json } = require('express');
const pool = require('../connector/sql_connector');
const { create_employee_service, update_employee_service } = require('./employee.service');



const create_user_service = (body) => new Promise((resolve, reject) => {
        create_employee_service(body).then((emp)=>{
              pool.query("SELECT login_id from login ORDER BY login_id DESC LIMIT 1").then((results) => {
            var new_login_id = 0
            var new_emp_id;
           
                if (results.rows[0]) {
                    new_login_id = Number(results.rows[0].login_id)+1
                }
                new_emp_id=emp.emp_id
                console.log(new_login_id,new_emp_id)
                pool.query(`Insert into login ("login_id", "employee_id","email","password","inserted_by","inserted_date","access","emp_status")  
            VALUES ($1, $2,$3,crypt($4, gen_salt('bf')),$5,$6,$7,$8)`,
                    [new_login_id, new_emp_id, body.employee_email, body.password, body.inserted_by, body.inserted_date,body.access,'ACTIVE'],
                ).then((val) => {
                    pool.query('COMMIT').then(()=>{
                        resolve({emp_id:new_emp_id,msg:"User created"})
                    }).catch(err => {
                        reject(err)
                    })
                    
            
                }).catch(err => {
                    reject(err)
                })
            }).catch(err => {
                reject(err)
            })
            
        
        }).catch(err => {
            reject(err)
        })
    
     
})
   



    const login_user_service = (body) => new Promise((resolve, reject) => {
        

        
     pool.query(`SELECT * from login Where email=$1 and password = crypt($2, password)`,
        [ body.employee_email,body.employee_password],)
        .then((results) => {
            if(results.rowCount==0){
                resolve({"msg":"Unable to login either username or password is wrong"})

            }
            else{
                resolve({"msg":"Login sucessful","values":{
                    "employee_id":results.rows[0].employee_id,
                    "email:":results.rows[0].email,
                    "access":results.rows[0].access
                }})
            }
        }).catch(err => {
            console.log(err)
            reject( err)
        })
  
    })


    const update_password_service=(body)=>new Promise((resolve, reject) => {
        

        
        pool.query(`UPDATE login SET password = crypt($1, gen_salt('bf')) Where email=$2`,
           [ body.employee_password,body.employee_email],)
           .then((results) => {
               
                   resolve({"msg":"Password updated"})
   
               
           }).catch(err => {
               console.log(err)
               reject( err)
           })
     
       })

       const update_access_service=(body)=>new Promise((resolve, reject) => {
        

        
        pool.query(`UPDATE login SET access = $1 Where email=$2`,
           [ body.access,body.employee_email],)
           .then((results) => {
               console.log("drfrw")
                   resolve({"msg":"Password updated"})
   
               
           }).catch(err => {
               console.log(err)
               reject( err)
           })
     
       })  

    module.exports = { create_user_service,login_user_service ,update_password_service,update_access_service}