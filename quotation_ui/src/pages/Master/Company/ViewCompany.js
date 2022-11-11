
import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'

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
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import {VIEW_COMPANY_URL,DELETE_COMPANY_URL} from "../../../Constonts/api"
import axios from "axios"

const ViewCompany = (props) => {
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add")
 const  [defaultval,setDefaultVal]=useState({})
 const [details,setDetails]=useState([])
	    

const fetchData=()=>{
  axios.get(VIEW_COMPANY_URL).then((val)=>{
    
      // props.setAlert({
      //   message:val.data.msg,
      //   type:"SUCCESS"
      // })
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
    
    setDefaultVal(row)
    setFormType("Edit")
    setmodal(!modal)
  }


const onDeleteButton=(row)=>{
  axios.post(DELETE_COMPANY_URL+row.company_id,{}).then((val)=>{
    
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
          <Breadcrumbs title="Pages" breadcrumbItem="View Company" />


          <TableCard 
          data={details} 
          addButton={"Add Company Details"} 
          tittle={'Company Details'} 
          onAddButton={onAddButton}
          editIcon={true}
          deleteIcon={true}
          onEditButton={onEditButton}
          onDeleteButton={onDeleteButton}
          />
			


          <Modal
                  size="lg"
                  isOpen={modal}
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
                   <AddcompanyComponent formType={formType} defaultval={defaultval} onAddButtonClose={onAddButtonClose}/>
                  </ModalBody>
                </Modal>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = state => {
 
  return {  }
}
export default connect(mapStateToProps, { setAlert })(ViewCompany)


ViewCompany.propTypes = {
  setAlert: PropTypes.func,
}