
const line_item_create_schema = {
	type: "object",
	required: ["line_item_title", "line_item_desc","inserted_by","unit_price","room_type","tax_type"],
	properties: {
		line_item_title: {
			type: "string",
			minLength: 1,
		},
		line_item_desc: {
			type: "string",
			minLength: 1,
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
			type: "number"
		},
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};



const line_item_update_schema = {
	type: "object",
	required: ["line_item_title", "line_item_desc","room_type","unit_price","updated_by","tax_type"],
	properties: {
		line_item_title: {
			type: "string",
			minLength: 1,
		},
		line_item_desc: {
			type: "string",
			minLength: 1,
		},
        room_type: {
			type: "string",
			minLength: 1,
		},
		tax_type: {
			type: "string",
			minLength: 1,
		},
        unit_price: {
			type: "number"
		},
        updated_by: {
			type: "string",
			minLength: 1,
		}
	},
};

module.exports={line_item_create_schema,line_item_update_schema}
