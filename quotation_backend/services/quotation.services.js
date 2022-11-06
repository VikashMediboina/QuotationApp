const pool = require('../connector/sql_connector');

const create_qutation_service = (body) => new Promise((resolve, reject) => {
    pool.query("SELECT quotation from main_item ORDER BY quotation_id DESC LIMIT 1").then((results) => {
        var new_quotation_id = 0
        if (results.rows[0]) {
            console.log(results.rows)
            new_quotation_id = Number(results.rows[0].main_item_id)+1
        }
        console.log(new_quotation_id)
        pool.query(`Insert into quotation ("quotation_id", "customer_name","address_1","address_2","address_3","city","state","quotation_date","lead_by","shop_manager_id","mobile_1","mobile_2","mail_id","customer_id","inserted_by","inserted_date")  
            VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)`,
            [new_quotation_id, body.customer_name, body.address_1,body.address_2,body.address_3, body.city, body.state,body.quotation_date, body.lead_by,body.shop_manager_id,body.mobile_1, body.mobile_2, body.mail_id,body.customer_id,body.inserted_by,body.inserted_date],
        ).then((val) => {
           resolve({quotation_id:new_quotation_id})
        }).catch(err => {
            console.log(err)
            reject(err)
        })
    
    })
    })