const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'quotationdb.ccavjtmuk034.us-east-1.rds.amazonaws.com',
  port: 5432,
  password:"12345678",
  database:"QuotationDB"
})



pool.connect((err)=>{
    if(err){
        console.log(err.message);
        return;
    }
    console.log("database connected")
})

module.exports=pool