
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
import AddMainItems from "./AddMainItems"

const ViewMainItems = () => {
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add");
 const  [defaultval,setDefaultVal]=useState({});
     const data = {
    columns: [
      {
        label: "Id",
        field: "mainitem_id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Title",
        field: "mainitem_title",
        sort: "asc",
        width: 270,
      },
      {
        label: "Description",
        field: "mainitem_description",
        sort: "asc",
        width: 200,
      }, {
        label: "Price",
        field: "mainitem_price",
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
        mainitem_id: "kitchen",
        mainitem_title: "kitchen main1 ",
        mainitem_description: "kitchen main1  description",
        mainitem_price:"$5000",
        location: "61",
      },
       {
        mainitem_id: "kitchen",
        mainitem_title: "kitchen line2 ",
        mainitem_description: "kitchen main2  description",
        mainitem_price:"$5000",
        location: "61",
      }, {
        mainitem_id: "kitchen",
        mainitem_title: "kitchen main3 ",
        mainitem_description: "kitchen main3  description",
        mainitem_price:"$5000",
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
          <Breadcrumbs title="Pages" breadcrumbItem="View Main Items" />
 
          <TableCard 
          data={data} 
          addButton={"Add Main Items"} 
          tittle={'Main Items'} 
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
                   Add Main Items
                    </ModalHeader>
                  <ModalBody>
                   <AddMainItems formType={formType} defaultval={defaultval}/>
                  </ModalBody>
                </Modal>
      </div>
    </React.Fragment>
  )
}

export default ViewMainItems