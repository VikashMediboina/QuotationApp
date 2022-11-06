const pool = require('../connector/sql_connector');



const create_company_service = (body) => new Promise((resolve, reject) => {

    return pool.query("SELECT company_id from company_dtl ORDER BY company_id DESC LIMIT 1").then((results) => {
        var new_company_id = 0
       
            if (results.rows[0]) {
                new_company_id = Number(results.rows[0].company_id)+1
            }
        console.log(new_company_id)
        pool.query(`Insert into company_dtl ("company_id", "company_code","company_name","location","inserted_by","inserted_date")  
            VALUES ($1, $2,$3,$4,$5,$6)`,
            [new_company_id, body.company_code, body.company_name, body.location, body.inserted_by, body.inserted_date],
        ).then((val) => {

            resolve("Inserted SucessFully")

        }).catch(err => {
            reject(err)
        })
    }).catch(err => {
        console.log(err)
        reject( err)
    })

})

const get_all_company=()=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from company_dtl ORDER BY company_id ASC").then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})



const update_company_service = (body) => new Promise((resolve, reject) => {

    return pool.query(`UPDATE company_dtl SET "company_code"=$1 , "company_name"=$2,"location"=$3,"updated_by"=$4,"updated_date"=$5 WHERE "company_id" = $6`,
    [ body.company_code, body.company_name, body.location, body.updated_by, body.updated_date,body.company_id],)
    .then((results) => {
        console.log(results)
            resolve("Update SucessFully")
    }).catch(err => {
        console.log(err)
        reject( err)
    })

})


const delete_company_service = (body)=>new Promise((resolve,reject)=>{
    return pool.query(`DELETE FROM company_dtl WHERE "company_id"=$1`,[body.company_id]).then((results)=>{
        resolve("Deleted SucessFully")
    }).catch(err => {   
        console.log(err)
        reject( err)
    })

})


module.exports = { create_company_service,get_all_company,update_company_service,delete_company_service }