
const company_create_schema = {
	type: "object",
	required: ["company_code", "company_name","location","inserted_by"],
	properties: {
		company_code: {
			type: "string",
			minLength: 1,
		},
		company_name: {
			type: "string",
			minLength: 1,
		},
		location: {
			type: "string",
			minLength: 1,
		},
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};



const company_update_schema = {
	type: "object",
	required: ["company_code", "company_name","location","updated_by"],
	properties: {
		company_code: {
			type: "string",
			minLength: 1,
		},
		company_name: {
			type: "string",
			minLength: 1,
		},
		location: {
			type: "string",
			minLength: 1,
		},
        updated_by: {
			type: "string",
			minLength: 1,
		}
	},
};

module.exports={company_create_schema,company_update_schema}
