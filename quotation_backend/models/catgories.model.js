
const catgories_create_schema = {
	type: "object",
	required: ["catogerie_title", "catogerie_desc","inserted_by"],
	properties: {
		catogerie_title: {
			type: "string",
			minLength: 1,
		},
		catogerie_desc: {
			type: "string",
			minLength: 1,
		},
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};



const catgories_update_schema = {
	type: "object",
	required: ["catogerie_title", "catogerie_desc","updated_by"],
	properties: {
		catogerie_title: {
			type: "string",
			minLength: 1,
		},
		catogerie_desc: {
			type: "string",
			minLength: 1,
		},
        updated_by: {
			type: "string",
			minLength: 1,
		}
	},
};

module.exports={catgories_create_schema,catgories_update_schema}
