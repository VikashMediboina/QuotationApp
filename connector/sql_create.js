const Pool = require('pg').Pool
const {
    drop_QuotationDB,
    create_QuotationDB,
    drop_address,
    crate_address,
    drop_company_dtl,
    create_company_dtl,
    drop_employee,
    create_employee,
    drop_line_item,
    create_line_item,
    drop_main_item,
    create_main_item,
    drop_quotation_line_item,
    create_quotation_line_item,
    drop_quotation_main_item,
    create_quotation_main_item,
    drop_employment,
    create_employment,
    drop_shop_detail,
    create_shop_detail,
    drop_quotation,
    create_quotation,
    // drop_catogeries,
    // create_catogeries
}=require('./crate_queries')
const pool = new Pool({
  user: 'postgres',
  host: 'quotationdb.ccavjtmuk034.us-east-1.rds.amazonaws.com',
  port: 5432,
  password:"12345678",
  database:"QuotationDB"
})


const queries=[drop_QuotationDB,
    create_QuotationDB,
    drop_address,
    crate_address,
    drop_company_dtl,
    create_company_dtl,
    drop_employee,
    create_employee,
    drop_line_item,
    create_line_item,
    drop_main_item,
    create_main_item,
    drop_quotation_line_item,
    create_quotation_line_item,
    drop_quotation_main_item,
    create_quotation_main_item,
    drop_employment,
    create_employment,
    drop_shop_detail,
    create_shop_detail,
    drop_quotation,
    create_quotation
    // drop_catogeries,
    // create_catogeries
]
for(val in queries){
    pool.query(queries[val],(err,results)=>{
        console.log(queries[val])
    if (err) {
        console.log(err)
      }
      console.log(results)
    
    })
    // console.log(queries[val])
}

// pool.connect((err)=>{
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log("database connected")
// })