
const main_item_create_schema = {
	type: "object",
	required: ["main_item_title", "main_item_desc","inserted_by","unit_price","room_type","main_item_depth","tax_type"],
	properties: {
		main_item_title: {
			type: "string",
			minLength: 1,
		},
		main_item_desc: {
			type: "string",
			minLength: 1,
		},
		main_item_depth:{
			type: "number"
		},
		tax_type: {
			type: "string",
			minLength: 1,
		},
        room_type: {
			type: "string",
			minLength: 1,
		},
        unit_price: {
			type: "number",
		},
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};



const main_item_update_schema = {
	type: "object",
	required: ["main_item_title", "main_item_desc","room_type","unit_price","updated_by","main_item_depth","tax_type"],
	properties: {
		main_item_title: {
			type: "string",
			minLength: 1,
		},
		main_item_desc: {
			type: "string",
			minLength: 1,
		},
		main_item_depth: {
			type: "number"
		},
		tax_type: {
			type: "string",
			minLength: 1,
		},
        room_type: {
			type: "string",
			minLength: 1,
		},
        unit_price: {
			type: "number",
		},
        updated_by: {
			type: "string",
			minLength: 1,
		}
	},
};

module.exports={main_item_create_schema,main_item_update_schema}
