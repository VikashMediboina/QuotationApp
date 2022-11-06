const pool = require('../connector/sql_connector');


const create_catogerie_service = (body) => new Promise((resolve, reject) => {
pool.query("SELECT catogerie_id from catogeries ORDER BY catogerie_id DESC LIMIT 1").then((results) => {
    var new_cat_id = 0
    if (results.rows[0]) {
        console.log(results.rows)
        new_cat_id = Number(results.rows[0].catogerie_id)+1
    }
    console.log(new_cat_id)
    pool.query(`Insert into catogeries ("catogerie_id", "catogerie_title","catogerie_desc","inserted_by","inserted_date")  
        VALUES ($1, $2,$3,$4,$5)`,
        [new_cat_id, body.catogerie_title, body.catogerie_desc, body.inserted_by, body.inserted_date],
    ).then((val) => {
       resolve("Inserted Sucessfully")
    }).catch(err => {
        console.log(err)
        reject(err)
    })

})
})
const get_all_catogeries=()=> new Promise((resolve,reject)=>{
    return pool.query("SELECT * from catogeries").then((results)=>{
        console.log(results.rows[0])
        resolve(results.rows)
    }).catch(err => {
        console.log(err)
        reject( err)
    })
})

    const update_catogerie_service = (body) => new Promise((resolve, reject) => {

        return pool.query(`UPDATE catogeries SET "catogerie_title"=$1 , "catogerie_desc"=$2,"updated_by"=$3,"updated_date"=$4 WHERE "catogerie_id" = $5`,
        [ body.catogerie_title, body.catogerie_desc, body.updated_by, body.updated_date,body.catogerie_id],
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

module.exports={create_catogerie_service,update_catogerie_service,get_all_catogeries}