const pool = require('../connector/sql_connector');
const { create_address_service, update_address_service } = require('./address.service');



const create_customer_service = (body) => new Promise((resolve, reject) => {
        create_address_service(body).then((address)=>{
              pool.query("SELECT customer_id from customer ORDER BY customer_id DESC LIMIT 1").then((results) => {
            var new_cus_id = 0
            var new_add_id;
           
                if (results.rows[0]) {
                    new_cus_id = Number(results.rows[0].customer_id)+1
                }
                new_add_id=address.add_id
                console.log(new_cus_id,new_add_id)
                pool.query(`Insert into customer ("customer_id", "address_id","customer_name","customer_email","customer_phone_number","customer_alt_phone_number","inserted_by","inserted_date")  
            VALUES ($1, $2,$3,$4,$5,$6,$7,$8)`,
                    [new_cus_id, new_add_id, body.customer_name, body.customer_email, body.customer_phone_number, body.customer_alt_phone_number, body.inserted_by, body.inserted_date],
                ).then((val) => {
                    pool.query('COMMIT').then(()=>{
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
    const get_all_customer=()=> new Promise((resolve,reject)=>{
        return pool.query(`SELECT *
        FROM customer c , address a
        WHERE c.address_id=a.address_id`).then((results)=>{
            console.log(results.rows[0])
            resolve(results.rows)
        }).catch(err => {
            console.log(err)
            reject( err)
        })
    })



    const update_customer_service = (body) => new Promise((resolve, reject) => {
        update_address_service((body)).then(res=>{

        
     pool.query(`UPDATE customer SET "customer_name"=$1 , "customer_email"=$2,"customer_phone_number"=$3,"customer_alt_phone_number"=$4,"updated_by"=$5,"updated_date"=$6 WHERE "customer_id" = $7`,
        [ body.customer_name, body.customer_email, body.customer_phone_number,body.customer_alt_phone_number, body.updated_by, body.updated_date,body.customer_id],)
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


    module.exports = { create_customer_service,update_customer_service,get_all_customer }