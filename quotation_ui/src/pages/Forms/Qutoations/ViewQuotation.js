import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableCard from "../../../components/InsideComponents/TableCard"
import { DELETE_QUTOATION_URL, GET_QUTOATION_URL } from "../../../Constonts/api"
import axios from "axios"
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import AddQuotation from "./AddQuotation"

const ViewQuotation = (props) => {
  const {login}=props
  const [details,setDetails]=useState([])
const [showAdd,setShowAdd]=useState(false)
const [formType,setFormType]=useState("")
const [id,setId]=useState(false)
const [clone,setclone]=useState(null)
  const fetchData=()=>{
    const body={"company_id":Number(login?.company_id)}
    axios.get(GET_QUTOATION_URL,{params:body}).then((val)=>{
      
        // props.setAlert({
        //   message:val.data.msg,
        //   type:"SUCCESS"
        // })
        const data = {
 
         columns: [
          {
            label: "Quotation Id",
            field: "quotation_id",
            sort: "asc",
            width: 150,
          },
          {
            label: "Customer Name",
            field: "customer_name",
            sort: "asc",
            width: 270,
          },
          {
            label: "City",
            field: "city",
            sort: "asc",
            width: 200,
          },
          {
            label: "Date",
            field: "quotation_date",
            sort: "asc",
            width: 100,
          },
          {
            label: "Lead By",
            field: "lead_by_name",
            sort: "asc",
            width: 150,
          },
          {
            label: "Status",
            field: "quot_status",
            sort: "asc",
            width: 100,
          }
         ],
          rows:val.data.values}
        setDetails(data)
      
    }).catch(err=>{
      if(err?.response){
        console.log(err?.response?.data?.msg)
        props.setAlert({
          message:String(err?.response?.data?.msg),
          type:"ERROR"
        })
      }
      else{
        props.setAlert({
          message:String(err),
          type:"ERROR"
        })
      }
      
    })
  }
  useEffect(()=>{
    fetchData()
  },[])
  const onEditButton=(row)=>{
    setId(row.quotation_id)
    setShowAdd(true)
    setFormType("Edit")
  }
  const onCloneButton=(row)=>{
    setclone(row.quotation_id)
    setShowAdd(true)
    setFormType("Clone")
  }
  const onViewButton=(row)=>{
    console.log(window.location)
    window.open(window.location.origin+"/qutation/"+row.quotation_id)
  }
  const onDeleteButton=(row)=>{
    axios.post(DELETE_QUTOATION_URL+row.quotation_id,{}).then((val)=>{
    
      props.setAlert({
        message:val.data.msg,
        type:"SUCCESS"
      })
    fetchData()
  }).catch(err=>{
    if(err?.response){
      console.log(err?.response?.data?.msg)
      props.setAlert({
        message:String(err?.response?.data?.msg),
        type:"ERROR"
      })
    }
    else{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
    }
  })
  }
  return (
    <React.Fragment>
     {!showAdd? <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Quotations" />
			
        <Row>
          <Col className="col-12">
          <TableCard
          data={details} 
          tittle={'Quotations'} 
          editIcon={login?.access?.q_edit?true:false}
          deleteIcon={login?.access?.q_delete?true:false}
          onEditButton={onEditButton}
          onDeleteButton={onDeleteButton}
          onViewButton={onViewButton}
          onCloneButton={onCloneButton}
          />
           
          </Col>
        </Row>
      </div>:
      <AddQuotation quotation_props={id} formType={formType} clone_props={clone}/>}
    </React.Fragment>
  )
}


const mapStateToProps = state => {
  const { cacheDetails } = state?.genricReducer
  const { login } = state?.Login
 
  return {  cacheDetails,login}
}
export default connect(mapStateToProps, { setAlert })(ViewQuotation)


ViewQuotation.propTypes = {
  setAlert: PropTypes.func,
}