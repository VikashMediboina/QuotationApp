const pool = require('../connector/sql_connector');


const create_main_item_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT main_item_id from main_item ORDER BY main_item_id DESC LIMIT 1").then((results) => {
    var new_main_item_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_main_item_id = Number(results.rows[0].main_item_id)+1
    }
    console.log(new_main_item_id)
    pool.query(`Insert into main_item ("main_item_id", "main_item_title","main_item_desc","room_type","unit_price","inserted_by","inserted_date")  
        VALUES ($1, $2,$3,$4,$5,$6,$7)`,
        [new_main_item_id, body.main_item_title, body.main_item_desc,body.room_type,body.unit_price, body.inserted_by, body.inserted_date],
    ).then((val) => {
       resolve("Inserted Sucessfully")
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})
const get_all_main_items=()=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from main_item").then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

    const update_main_item_service = (body) => new Promise((resolve, reject) => {

        return pool.query(`UPDATE main_item SET "main_item_title"=$1 , "main_item_desc"=$2,"room_type"=$3,"unit_price"=$4,"updated_by"=$5,"updated_date"=$6 WHERE "main_item_id" = $7`,
        [ body.main_item_title, body.main_item_desc,body.room_type,body.unit_price, body.updated_by, body.updated_date,body.main_item_id],
        )
        .then((results) => {
            console.log(results)
            if(results.rowCount>0){
                resolve("Update SucessFully")
            }
        
        }).catch(err => {
            console.log(err)
            reject( err)
        })

    })

module.exports={create_main_item_service,update_main_item_service,get_all_main_items}