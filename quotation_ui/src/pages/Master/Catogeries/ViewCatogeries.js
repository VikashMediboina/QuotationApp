
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
import AddCatogeries from "./AddCatogeries"

const ViewCatogeries = () => {
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add")
 const  [defaultval,setDefaultVal]=useState({})
	 const data = {
    columns: [
      {
        label: "Id",
        field: "category_id",
        sort: "asc",
        width: 150,
      },
      {
        label: "category Code",
        field: "category_code",
        sort: "asc",
        width: 270,
      },
      {
        label: "category Name",
        field: "category_name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Location",
        field: "location",
        sort: "asc",
        width: 150,
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
        category_id: "Tiger Nixon",
        category_code: "System Architect",
        category_name: "Edinburgh",
        location: "61",
      },
      {
        category_id: "Tiger Nixon",
        category_code: "System Architect",
        category_name: "Edinburgh",
        location: "61",
      },
      {
        category_id: "Tiger Nixon",
        category_code: "System Architect",
        category_name: "Edinburgh",
        location: "61",
      }

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
          <Breadcrumbs title="Pages" breadcrumbItem="View Categories" />


          <TableCard 
          data={data} 
          addButton={"Add Category Details"} 
          tittle={'category Details'} 
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
                    Add Category
                    </ModalHeader>
                  <ModalBody>
                   <AddCatogeries formType={formType} defaultval={defaultval}/>
                  </ModalBody>
                </Modal>
      </div>
    </React.Fragment>
  )
}

export default ViewCatogeries