
import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableCard from "../../../components/InsideComponents/TableCard"
import AddEmployee from "./AddEmployee"
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import {VIEW_EMPLOYEE_URL,DELETE_EMPLOYEE_URL} from "../../../Constonts/api"
import axios from "axios"

const ViewEmployee = (props) => {
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add")
 const  [defaultval,setDefaultVal]=useState({})
 const [details,setDetails]=useState([])
	    

 const fetchData=()=>{
   axios.get(VIEW_EMPLOYEE_URL).then((val)=>{
     console.log(val.data)
       // props.setAlert({
       //   message:val.data.msg,
       //   type:"SUCCESS"
       // })
       const data = {

        columns: [
          {
            label: "Full name",
            field: "employee_name",
            sort: "asc",
            width: 150,
          },
          {
            label: "Role",
            field: "job_code",
            sort: "asc",
            width: 270,
          },
          {
            label: "Emp-ID",
            field: "employee_code",
            sort: "asc",
            width: 200,
          },
          {
            label: "Email",
            field: "employee_email",
            sort: "asc",
            width: 100,
          },
          {
            label: "Phone",
            field: "employee_phone_number",
            sort: "asc",
            width: 150,
          },
          {
            label: "Reporting to",
            field: "Reporting_to",
            sort: "asc",
            width: 100,
          },
          {
            label: "Location",
            field: "location",
            sort: "asc",
            width: 100,
          },
          {
            label: "Action",
            field: "action",
            sort: "asc",
            width: 250
          }
        ],
         rows:val.data.values}
       setDetails(data)
     
   }).catch(err=>{
     props.setAlert({
       message:String(err),
       type:"ERROR"
     })
     
   })
 }
 useEffect(()=>{
   fetchData()
 },[])
   const onAddButton=()=>{
     console.log("fwefewf")
     setDefaultVal({})
     setFormType("Add")
     setmodal(!modal)
   }
   const onAddButtonClose=(val)=>{
     setmodal(!modal)
    
     props.setAlert({
       message:val.data.msg,
       type:"SUCCESS"
     })
     fetchData()
 
   }
   const onEditButton=(row)=>{
     console.log("fwefewf",row)
     setDefaultVal(row)
     setFormType("Edit")
     setmodal(!modal)
   }
 
 
 const onDeleteButton=(row)=>{
   axios.post(DELETE_EMPLOYEE_URL+row.company_id,{}).then((val)=>{
     console.log(val.data)
       props.setAlert({
         message:val.data.msg,
         type:"SUCCESS"
       })
     fetchData()
   }).catch(err=>{
     props.setAlert({
       message:String(err),
       type:"ERROR"
     })
 })
 }
 

	
	
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Employee" />
			
          <TableCard
          data={details} 
          addButton={"Add Employees"} 
          tittle={'Employees'} 
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
                    Employee
                    </ModalHeader>
                  <ModalBody>
                   <AddEmployee formType={formType} defaultval={defaultval} onAddButtonClose={onAddButtonClose} employees={details.rows}/>
                  </ModalBody>
                </Modal>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
 
  return {  }
}
export default connect(mapStateToProps, { setAlert })(ViewEmployee)


ViewEmployee.propTypes = {
  setAlert: PropTypes.func,
}
