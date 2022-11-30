const login_update_password_model={
    type: "object",
	required: ["employee_email", "employee_password"],
    properties: {
		employee_email: {
			type: "string",
			minLength: 1,
		},
        employee_password: {
			type: "string",
			minLength: 1,
		},
		updated_by:{
			type: "string",
			minLength: 1,
		}
    }
}

module.exports={login_update_password_model}
