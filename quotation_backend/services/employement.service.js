const pool = require('../connector/sql_connector');
const { update_employee_service } = require('./employee.service');
const { create_user_service, update_access_service } = require('./user.service');



const create_employment_service = (body) => new Promise((resolve, reject) => {
        create_user_service(body).then((emp)=>{
              pool.query("SELECT employment_id from employment ORDER BY employment_id DESC LIMIT 1").then((results) => {
            var new_employment_id = 0
            var new_emp_id;
           
                if (results.rows[0]) {
                    new_employment_id = Number(results.rows[0].employment_id)+1
                }
                new_emp_id=emp.emp_id
                console.log(new_employment_id,new_emp_id)
                pool.query(`Insert into employment ("employment_id", "employee_id","company_id","job_code","start_date","stop_date","inserted_by","inserted_date","access")  
            VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)`,
                    [new_employment_id, new_emp_id, body.company_id, body.job_code, body.start_date, body.stop_date, body.inserted_by, body.inserted_date,body.access],
                ).then((val) => {
                    pool.query('COMMIT').then(()=>{
                        if(emp?.old){
                            resolve("User Already exists new company added with old credentials")
                        }
                        resolve("Inserted SucessFully")
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
    const get_all_employees=(body)=> new Promise((resolve,reject)=>{
        return pool.query(`SELECT *
        FROM employment c , employee a, company_dtl cd,login l
        WHERE c.employee_id=a.employee_id and cd.company_id=c.company_id and c.company_id=$1 and l.employee_id=a.employee_id and a.emp_status='ACTIVE'`,[body.company_id]).then((results)=>{
            console.log(results.rows[0])

            resolve(results.rows)
        }).catch(err => {
            console.log(err)
            reject( err)
        })
    })



    const update_employment_service = (body) => new Promise((resolve, reject) => {
        // update_access_service(body).then(login=>{
        update_employee_service((body)).then(res=>{

        
     pool.query(`UPDATE employment SET "company_id"=$1 , "job_code"=$2,"start_date"=$3,"stop_date"=$4,"updated_by"=$5,"updated_date"=$6,access=$7 WHERE "employment_id" = $8`,
        [ body.company_id, body.job_code, body.start_date,body.stop_date, body.updated_by, body.updated_date,body.access,body.employment_id],)
        .then((results) => {
            console.log(results)
            resolve("Update SucessFully")
        }).catch(err => {
            console.log(err)
            reject( err)
        })
    // }).catch(err => {
    //     console.log(err)
    //     reject( err)
    // })
}).catch(err => {
    console.log(err)
    reject( err)
})
    })


    module.exports = { create_employment_service,update_employment_service,get_all_employees }