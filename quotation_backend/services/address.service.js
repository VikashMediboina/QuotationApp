const pool = require('../connector/sql_connector');


const create_address_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT address_id from address ORDER BY address_id DESC LIMIT 1").then((results) => {
    var new_add_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_add_id = Number(results.rows[0].address_id)+1
    }
    console.log(new_add_id)
    pool.query(`Insert into address ("address_id", "address_1","address_2","address_3","city","state","country","inserted_by","inserted_date")  
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)`,
        [new_add_id, body.address_1, body.address_2, body.address_3, body.city, body.state, body.country, body.inserted_by, body.inserted_date],
    ).then((val) => {
       resolve({add_id:new_add_id})
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})

    const update_address_service = (body) => new Promise((resolve, reject) => {

        return pool.query(`UPDATE address SET "address_1"=$1 , "address_2"=$2,"address_3"=$3,"city"=$4 , "state"=$5,"country"=$6,"updated_by"=$7,"updated_date"=$8 WHERE "address_id" = $9`,
        [ body.address_1, body.address_2, body.address_3, body.city, body.state, body.country, body.inserted_by, body.inserted_date,body.address_id],
        )
        .then((results) => {
            console.log(results)
                resolve("Update SucessFully")
        }).catch(err => {
            console.log(err)
            reject( err)
        })

    })

module.exports={create_address_service,update_address_service}