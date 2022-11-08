
const employee_create_schema = {
	type: "object",
	required: ["employee_code", "employee_name","employee_email","password","job_code","employee_phone_number","inserted_by"],
	properties: {
		employee_code: {
			type: "string",
			minLength: 1,
		},
		employee_name: {
			type: "string",
			minLength: 1,
		},
		birth_date:{
			type: "string",
		},
		gender:{
			type: "string",
			minLength: 1,
			maxLength:1
		},
        employee_email: {
			type: "string",
			minLength: 1,
		},
		password:{
			type: "string",
			minLength: 1,
		},
        employee_phone_number: {
			type: "string",
			minLength: 1,
		},
		past_exp:{
			type: "string",
		},
		emp_status:{
			type: "string",
			maxLength:2,
		},
		emp_type:{
			type: "string",
			maxLength:2,
		},
		reporting_to:{
			type:"string",
		},
        company_id: {
			type: "string",
			minLength: 1,
		},
		job_code: {
			type: "string",
			minLength: 1,
		},
		start_date:{
			type: "string",
		},
		stop_date:{
			type: "string",
		},
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};



const employee_update_schema = {
	type: "object",
	required: ["employee_code", "employee_name","employee_email","employee_phone_number","employment_id","updated_by"],
	properties: {
		employee_code: {
			type: "string",
			minLength: 1,
		},
		employee_name: {
			type: "string",
			minLength: 1,
		},
		birth_date:{
			type: "string",
		},
		gender:{
			type: "string",
			minLength: 1,
			maxLength:1
		},
        employee_email: {
			type: "string",
			minLength: 1,
		},
        employee_phone_number: {
			type: "string",
			minLength: 1,
		},
		past_exp:{
			type: "string",
		},
		emp_status:{
			type: "string",
			maxLength:2,
		},
		emp_type:{
			type: "string",
			maxLength:2,
		},
		reporting_to:{
			type:"string",
		},
		employment_id:{
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
		start_date:{
			type: "string",
		},
		stop_date:{
			type: "string",
		},
        updated_by: {
			type: "string",
			minLength: 1,
		}
	},
};


module.exports={employee_create_schema,employee_update_schema}