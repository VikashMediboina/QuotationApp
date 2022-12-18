const cache_details = {
    job_code: [
        {
            "key": "SalesOfficer", "value": "Sales Person", "reporting": ['ShopManager', 'SalesGroupHead', 'GMSales', 'MD'],
            "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
            "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
            "company_add":false,"company_edit":false,"company_view":false,"company_delete":false,
            "emp_add":false,"emp_edit":false,"emp_view":false,"emp_delete":false,
            "cat_add":false,"cat_edit":false,"cat_view":true,"cat_delete":false,
            "main_add":false,"main_edit":false,"main_view":true,"main_delete":false,
            "line_add":false,"line_edit":false,"line_view":true,"line_delete":false}


        },
        { "key": "ShopManager", "value": "Shop Manager", "reporting": ['SalesGroupHead'],
        "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
        "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
        "company_add":false,"company_edit":false,"company_view":false,"company_delete":false,
        "emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,
        "cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,
        "main_add":true,"main_edit":true,"main_view":true,"main_delete":true,
        "line_add":true,"line_edit":true,"line_view":true,"line_delete":true}
},
        { "key": "DataEntryOperator", "value": "Data Entry Operator", "reporting": ['ShopManager'],
        "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
        "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
        "company_add":false,"company_edit":false,"company_view":false,"company_delete":false,
        "emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,
        "cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,
        "main_add":true,"main_edit":true,"main_view":true,"main_delete":true,
        "line_add":true,"line_edit":true,"line_view":true,"line_delete":true} },
        { "key": "SalesGroupHead", "value": "Sales Group Head", "reporting": ['GMSales'],
        "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
        "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
        "company_add":false,"company_edit":false,"company_view":false,"company_delete":false,
        "emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,
        "cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,
        "main_add":true,"main_edit":true,"main_view":true,"main_delete":true,
        "line_add":true,"line_edit":true,"line_view":true,"line_delete":true} },
        { "key": "GMSales", "value": "GM Sales", "reporting": ['MD'],
        "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
        "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
        "company_add":false,"company_edit":false,"company_view":false,"company_delete":false,
        "emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,
        "cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,
        "main_add":true,"main_edit":true,"main_view":true,"main_delete":true,
        "line_add":true,"line_edit":true,"line_view":true,"line_delete":true} },
        { "key": "MD", "value": "MD", "reporting": [],
        "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
        "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
        "company_add":false,"company_edit":false,"company_view":false,"company_delete":false,
        "emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,
        "cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,
        "main_add":true,"main_edit":true,"main_view":true,"main_delete":true,
        "line_add":true,"line_edit":true,"line_view":true,"line_delete":true} },
        { "key": "Admin", "value": "Admin", "reporting": [],
        "access":{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,
        "c_add":true,"c_edit":true,"c_view":true,"c_delete":true,
        "company_add":true,"company_edit":true,"company_view":true,"company_delete":true,
        "emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,
        "cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,
        "main_add":true,"main_edit":true,"main_view":true,"main_delete":true,
        "line_add":true,"line_edit":true,"line_view":true,"line_delete":true} },
    ],
    status_code: [
        "Drafted", "Active", "In-active", "Completed", "Advance received","Revised"
    ],
    status_code_options: {
        "Drafted":["Active","In-active"], "Active":["Completed","Advance received","Revised"], "In-active":[], "Completed":[], "Advance received":["Completed"]
    },
    tax_type: [
        { value: 10, key: "type_1" }, { value: 20, key: "type_2" }
    ]
}


module.exports = { cache_details }