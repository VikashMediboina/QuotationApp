const cache_details={
    job_code:[
        {"key":"SalesOfficer","value":"Sales Person","reporting":['ShopManager','SalesGroupHead','GMSales','MD']},
        {"key":"ShopManager","value":"Shop Manager","reporting":['SalesGroupHead']},
        {"key":"DataEntryOperator","value":"Data Entry Operator","reporting":['ShopManager']},
        {"key":"SalesGroupHead","value":"Sales Group Head","reporting":['GMSales']},
        {"key":"GMSales","value":"GM Sales","reporting":['MD']},
        {"key":"MD","value":"MD","reporting":[]},
    ],
    status_code:[
       "Drafted","Active","In-active","Completed","Advance received"
    ]
}


module.exports={cache_details}