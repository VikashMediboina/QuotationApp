
const qutoation_line_item_create_schema = {
	type: "array",
	required: ["line_item_title","line_item_id", "line_item_desc","inserted_by","unit_price","quotation_id","seq_no","line_seq_no","quantity","tot_price"],
	properties: {

        seq_no:{
            type: "number"
        },
        line_seq_no:{
            type: "number"
        },
		line_item_title: {
			type: "string",
			minLength: 1,
		},
		line_item_desc: {
			type: "string",
			minLength: 1,
		},
        unit_price: {
			type: "number"
		},
        quantity:{
            type: "number"
        },
        tot_price:{
            type: "number"
        },
        disc_price:{
            type: "number"
        },
        net_price:{
            type: "number"
        },
        cgst:{
            type: "number"
        },
        sgst:{
            type: "number"
        },
        igst:{
            type: "number"
        },
        inserted_by: {
			type: "string",
			minLength: 1,
		}
	},
};

// const create_quotation_schema={
// 	type: "object",
//     required:[quotation_line_item],
//     properties:{
//         quotation_line_item:qutoation_line_item_create_schema
//     }
// }

const qutotion_line_item_update_schema = {
	type: "object",
	required: ["line_item_title", "line_item_desc","room_type","unit_price","updated_by","quotation_id","seq_no","line_seq_no","quantity","tot_price"],
	properties: {
        quotation_id:{
            type: "number"
        },
        seq_no:{
            type: "number"
        },
        line_seq_no:{
            type: "number"
        },
		line_item_title: {
			type: "string",
			minLength: 1,
		},
		line_item_desc: {
			type: "string",
			minLength: 1,
		},
        unit_price: {
			type: "number"
		},
        quantity:{
            type: "number"
        },
        tot_price:{
            type: "number"
        },
        disc_price:{
            type: "number"
        },
        net_price:{
            type: "number"
        },
        cgst:{
            type: "number"
        },
        sgst:{
            type: "number"
        },
        igst:{
            type: "number"
        },
        updated_by: {
			type: "string",
			minLength: 1,
		}
	},
}



module.exports={qutoation_line_item_create_schema}