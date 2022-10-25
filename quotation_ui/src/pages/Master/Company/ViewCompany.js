
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
import AddcompanyComponent from "./AddcompanyComponent"

const ViewCompany = () => {
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add")
 const  [defaultval,setDefaultVal]=useState({})
	 const data = {
    columns: [
      {
        label: "Id",
        field: "company_id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Company Code",
        field: "company_code",
        sort: "asc",
        width: 270,
      },
      {
        label: "Company Name",
        field: "company_name",
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
        company_id: "Tiger Nixon",
        company_code: "System Architect",
        company_name: "Edinburgh",
        location: "61",
      },
      {
        company_id: "Tiger Nixon",
        company_code: "System Architect",
        company_name: "Edinburgh",
        location: "61",
      },
      {
        company_id: "Tiger Nixon",
        company_code: "System Architect",
        company_name: "Edinburgh",
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
          <Breadcrumbs title="Pages" breadcrumbItem="View Company" />


          <TableCard 
          data={data} 
          addButton={"Add Company Details"} 
          tittle={'Company Details'} 
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
                    Form
                    </ModalHeader>
                  <ModalBody>
                   <AddcompanyComponent formType={formType} defaultval={defaultval}/>
                  </ModalBody>
                </Modal>
      </div>
    </React.Fragment>
  )
}

export default ViewCompany
