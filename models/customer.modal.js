
const customer_create_schema = {
	type: "object",
	required: ["customer_name", "customer_email","customer_phone_number","address_1","city","state","country","inserted_by"],
	properties: {
		customer_name: {
			type: "string",
			minLength: 1,
		},
		customer_email: {
			type: "string",
			minLength: 1,
		},
		customer_phone_number: {
			type: "string",
			minLength: 1,
		},
        customer_alt_phone_number: {
			type: "string",
		},
        address_1:{
            type: "string",
			minLength: 1,
        },
        address_2:{
            type: "string",
        },
        address_3:{
            type: "string",
        },
        city:{
            type: "string",
			minLength: 1,
        },
        state:{
            type: "string",
			minLength: 1,
        },
        country:{
            type: "string",
			minLength: 1,
        },
        cust_profile:{
            type: "string",
        },
        inserted_by:{
            type: "string",
			minLength: 1,
        }

	},
};



const customer_update_schema = {
	type: "object",
	required: ["customer_name", "customer_email","customer_phone_number","address_id","address_1","city","state","country","updated_by"],
	properties: {
		customer_name: {
			type: "string",
			minLength: 1,
		},
		customer_email: {
			type: "string",
			minLength: 1,
		},
		customer_phone_number: {
			type: "string",
			minLength: 1,
		},
        customer_alt_phone_number: {
			type: "string",
		},
        address_id:{
            type: "string",
			minLength: 1,
        },
        address_1:{
            type: "string",
			minLength: 1,
        },
        address_2:{
            type: "string",
        },
        address_3:{
            type: "string",
        },
        city:{
            type: "string",
			minLength: 1,
        },
        state:{
            type: "string",
			minLength: 1,
        },
        country:{
            type: "string",
			minLength: 1,
        },
        updated_by:{
            type: "string",
			minLength: 1,
        }

	},
};


module.exports={customer_create_schema,customer_update_schema}
