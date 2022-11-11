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
    ],
    tax_type:[
        {value:10,key:"type_1"},{value:20,key:"type_2"}
    ]
}


module.exports={cache_details}