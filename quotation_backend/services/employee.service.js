const pool = require('../connector/sql_connector');
const { update_access_service } = require('./user.service');


const create_employee_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT employee_id from employee ORDER BY employee_id DESC LIMIT 1").then((results) => {
    var new_emp_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_emp_id = Number(results.rows[0].employee_id)+1
    }
    console.log(new_emp_id)
    pool.query(`Insert into employee ("employee_id", "employee_code","employee_name","birth_date","gender","employee_email","employee_phone_number","past_exp","emp_type","reporting_to","inserted_by","inserted_date","emp_status")  
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
        [new_emp_id, body.employee_code, body.employee_name, body.birth_date, body.gender,body.employee_email,body.employee_phone_number, body.past_exp,body.emp_type,Number(body.reporting_to), body.inserted_by, body.inserted_date, 'ACTIVE'],
    ).then((val) => {
       resolve({emp_id:new_emp_id})
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})

    const update_employee_service = (body) => new Promise((resolve, reject) => {
     
            pool.query(`UPDATE employee SET "employee_code"=$1 , "employee_name"=$2,"birth_date"=$3,"gender"=$4 , "past_exp"=$5,"emp_type"=$6,"reporting_to"=$7,"updated_by"=$8,"updated_date"=$9 WHERE "employee_id" = $10`,
            [ body.employee_code, body.employee_name, body.birth_date, body.gender, body.past_exp,body.emp_type,Number(body.reporting_to), body.updated_by, body.updated_date,body.employee_id],
            )
            .then((results) => {
                console.log(results)
                    resolve("Update SucessFully")
            }).catch(err => {
                console.log(err)
                reject( err)
            })
    
        
       
    })

    const delete_employee_service = (body) => new Promise((resolve, reject) => {
     
        pool.query(`UPDATE login SET "emp_status"='NOT ACTIVE' WHERE "employee_id" = $1`,[ body.employee_id])
        .then((results) => {
            pool.query(`UPDATE employee SET "emp_status"='NOT ACTIVE',"updated_by"=$1,"updated_date"=$2 WHERE "employee_id" = $3`,
            [  body.updated_by, body.updated_date,body.employee_id],
            )
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

module.exports={create_employee_service,update_employee_service,delete_employee_service}