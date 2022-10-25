const pool = require('../connector/sql_connector');


const create_catogerie_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT catogerie_id from catogeries ORDER BY catogerie_id DESC LIMIT 1").then((results) => {
    var new_cat_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_cat_id = Number(results.rows[0].catogerie_id)+1
    }
    console.log(new_cat_id)
    pool.query(`Insert into catogerie ("catogerie_id", "catogerie_1","catogerie_2","catogerie_3","city","state","country","inserted_by","inserted_date")  
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)`,
        [new_cat_id, body.catogerie_1, body.catogerie_2, body.catogerie_3, body.city, body.state, body.country, body.inserted_by, body.inserted_date],
    ).then((val) => {
       resolve({add_id:new_cat_id})
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})

    const update_catogerie_service = (body) => new Promise((resolve, reject) => {

        return pool.query(`UPDATE catogeries SET "catogerie_1"=$1 , "catogerie_2"=$2,"catogerie_3"=$3,"city"=$4 , "state"=$5,"country"=$6,"updated_by"=$7,"updated_date"=$8 WHERE "catogerie_id" = $9`,
        [ body.catogerie_1, body.catogerie_2, body.catogerie_3, body.city, body.state, body.country, body.inserted_by, body.inserted_date,body.catogerie_id],
        )
        .then((results) => {
            console.log(results)
                resolve("Update SucessFully")
        }).catch(err => {
            console.log(err)
            reject( err)
        })

    })

module.exports={create_catogerie_service,update_catogerie_service}