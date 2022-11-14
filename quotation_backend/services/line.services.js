const pool = require('../connector/sql_connector');


const create_line_item_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT line_item_id from line_item ORDER BY line_item_id DESC LIMIT 1").then((results) => {
    var new_line_item_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_line_item_id = Number(results.rows[0].line_item_id)+1
    }
    console.log(new_line_item_id)
    pool.query(`Insert into line_item ("line_item_id", "line_item_title","line_item_desc","room_type","unit_price","inserted_by","inserted_date","tax_type")  
        VALUES ($1, $2,$3,$4,$5,$6,$7,$8)`,
        [new_line_item_id, body.line_item_title, body.line_item_desc,body.room_type,body.unit_price, body.inserted_by, body.inserted_date,body.tax_type],
    ).then((val) => {
       resolve("Inserted Sucessfully")
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})
const get_all_line_items=()=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from line_item").then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

    const update_line_item_service = (body) => new Promise((resolve, reject) => {

        return pool.query(`UPDATE line_item SET "line_item_title"=$1 , "line_item_desc"=$2,"room_type"=$3,"unit_price"=$4,"updated_by"=$5,"updated_date"=$6, "tax_type"=$7 WHERE "line_item_id" = $8`,
        [ body.line_item_title, body.line_item_desc,body.room_type,body.unit_price, body.updated_by, body.updated_date,body.tax_type,body.line_item_id],
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



const delete_line_item_service = (body)=>new Promise((resolve,reject)=>{
    return pool.query(`DELETE FROM line_item WHERE "line_item_id"=$1`,[body.line_item_id]).then((results)=>{
        resolve("Deleted SucessFully")
    }).catch(err => {   
        console.log(err)
        reject( err)
    })

})

module.exports={create_line_item_service,update_line_item_service,get_all_line_items,delete_line_item_service}