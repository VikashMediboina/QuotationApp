
import React, { useState } from "react"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableCard from "../../../components/InsideComponents/TableCard"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import AddLineItems from "./AddLineItems"

const ViewLineItems = () => {
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add")
 const  [defaultval,setDefaultVal]=useState({})
	 const data = {
    columns: [
      {
        label: "Id",
        field: "lineitem_id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Title",
        field: "lineitem_title",
        sort: "asc",
        width: 270,
      },
      {
        label: "Description",
        field: "lineitem_description",
        sort: "asc",
        width: 200,
      }, {
        label: "Price",
        field: "lineitem_price",
        sort: "asc",
        width: 250
      },
      {
        label: "Action",
        field: "action",
        sort: "asc",
        width: 250
      }
    ],
    rows: [
      {
        lineitem_id: "kitchen",
        lineitem_title: "kitchen line1 ",
        lineitem_description: "kitchen line1  description",
        lineitem_price:"$5000",
        location: "61",
      },
       {
        lineitem_id: "kitchen",
        lineitem_title: "kitchen line2 ",
        lineitem_description: "kitchen line2  description",
        lineitem_price:"$5000",
        location: "61",
      }, {
        lineitem_id: "kitchen",
        lineitem_title: "kitchen line3",
        lineitem_description: "kitchen line3  description",
        lineitem_price:"$5000",
        location: "61",
      },

    ],
  }
	const onAddButton=()=>{
    console.log("fwefewf")
    setDefaultVal({})
    setFormType("Add")
    setmodal(!modal)
  }
  const onEditButton=(row)=>{
    console.log("fwefewf",row)
    setDefaultVal(row)
    setFormType("Edit")
    setmodal(!modal)
  }
	
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Line Items" />
 
          <TableCard 
          data={data} 
          addButton={"Add Line Items"} 
          tittle={'Line Items'} 
          onAddButton={onAddButton}
          editIcon={true}
          deleteIcon={true}
          onEditButton={onEditButton}
          />
			


          <Modal
                  size="lg"
                  isOpen={modal}
                  toggle={() => {
                    setmodal(!modal)
                  }}
                >
                  <ModalHeader
                    toggle={() => {
                      setmodal(!modal)
                    }}
                    className="h4 mt-0 mb-4"
                  >
                   Add Line Items
                    </ModalHeader>
                  <ModalBody>
                   <AddLineItems formType={formType} defaultval={defaultval}/>
                  </ModalBody>
                </Modal>
      </div>
    </React.Fragment>
  )
}

export default ViewLineItems