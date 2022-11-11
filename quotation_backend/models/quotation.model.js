
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






const create_line_items=(quotation_id,body,new_line_seq_no)=>(
    body.line_item_details.map((line)=>([  
        quotation_id,
            line?.seq_no,
            new_line_seq_no,
            line.line_item_id,
            line.line_item_title,
            line.line_item_desc,
            line.quantity,
            line.unit_price,
            line.tot_price,
            line?.disc_price,
            line?.net_price,
            line.cgst,
            line.sgst,
            line.igst,
            line.org_unit_price,
            body.inserted_by,
           new Date(),
           line.tax_type,
           line.room_type
    ])
))

// {   
//     quotation_id:quotation_id,
//         seq_no:line.seq_no,
//         line_seq_no:line.line_seq_no,
//         line_item_title:line.line_item_title,
//         line_item_desc:line.line_item_desc,
//         unit_price:line.unit_price,
//         quantity:line.quantity,
//         tot_price:line.tot_price,
//         disc_price:line?.disc_price,
//         net_price:line?.net_price,
//         cgst:line.cgst,
//         sgst:line.sgst,
//         igst:line.igst,
//         inserted_by:body.inserted_by,
//         inserted_date:new Date()
// }
const create_main_items=(quotation_id,body,new_seq_no)=>(
    body.main_item_details.map((main)=>([ 
        quotation_id,
        new_seq_no,
        main.room_type,
        main.main_item_id,
        main.main_item_title,
        main.main_item_desc,
        main.length,
        main.height,
        main.depth,
        main.tot_area,
        main.quantity,
        main.unit_price,
        main.tot_price,
        main?.disc_price?main?.disc_price:0,
        main?.net_price?main?.net_price:0,
        main.cgst,
        main.sgst,
        main.igst,
        main.org_unit_price,
        body.inserted_by,
        new Date(),
        main.tax_type,
        main.main_item_depth
    ])
))



// {   
//     quotation_id:quotation_id,
//     seq_no:main.seq_no,
//     main_item_title:main.main_item_title,
//     main_item_desc:main.main_item_desc,
//     room_type:main.room_type,
//     length:main.length,
//     height:main.height,
//     depth:main.depth,
//     tot_area:main.tot_area,
//     quantity:main.quantity,
//     unit_price:main.unit_price,
//     tot_price:main.tot_price,
//     disc_price:main?.disc_price,
//     net_price:main?.net_price,
//     cgst:main.cgst,
//     sgst:main.sgst,
//     igst:main.igst,
//     inserted_by:body.inserted_by,
//     inserted_date:new Date()
// }
module.exports={create_line_items,create_main_items}