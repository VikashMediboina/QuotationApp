
const employee_create_schema = {
	type: "object",
	required: ["employee_code", "company_name","location","inserted_by"],
	properties: {
		employee_code: {
			type: "string",
			minLength: 1,
		},
		employee_name: {
			type: "string",
			minLength: 1,
		},
        employee_email: {
			type: "string",
			minLength: 1,
		},
        employee_phone_number: {
			type: "string",
			minLength: 1,
		},
        company_id: {
			type: "string",
			minLength: 1,
		},
		job_code: {
			type: "string",
			minLength: 1,
		},
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};
