const pool = require('../connector/sql_connector');


const create_employee_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT employee_id from employee ORDER BY employee_id DESC LIMIT 1").then((results) => {
    var new_emp_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_emp_id = Number(results.rows[0].employee_id)+1
    }
    console.log(new_emp_id)
    pool.query(`Insert into employee ("employee_id", "employee_code","employee_name","birth_date","gender","employee_email","employee_phone_number","past_exp","emp_status","emp_type","reporting_to","inserted_by","inserted_date")  
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)`,
        [new_emp_id, body.employee_code, body.employee_name, body.birth_date, body.gender,body.employee_email,body.employee_phone_number, body.past_exp, body.emp_status,body.emp_type,Number(body.reporting_to), body.inserted_by, body.inserted_date],
    ).then((val) => {
       resolve({emp_id:new_emp_id})
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})

    const update_employee_service = (body) => new Promise((resolve, reject) => {

        return pool.query(`UPDATE employee SET "employee_code"=$1 , "employee_name"=$2,"birth_date"=$3,"gender"=$4 , "past_exp"=$5,"emp_status"=$6,"emp_type"=$7,"reporting_to"=$8,"updated_by"=$9,"updated_date"=$10 WHERE "employee_id" = $11`,
        [ body.employee_code, body.employee_name, body.birth_date, body.gender, body.past_exp, body.emp_status,body.emp_type,Number(body.reporting_to), body.updated_by, body.updated_date,body.employee_id],
        )
        .then((results) => {
            console.log(results)
                resolve("Update SucessFully")
        }).catch(err => {
            console.log(err)
            reject( err)
        })

    })

module.exports={create_employee_service,update_employee_service}