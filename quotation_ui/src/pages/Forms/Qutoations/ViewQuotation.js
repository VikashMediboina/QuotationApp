import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableCard from "../../../components/InsideComponents/TableCard"
import { GET_QUTOATION_URL } from "../../../Constonts/api"
import axios from "axios"
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import AddQuotation from "./AddQuotation"

const ViewQuotation = (props) => {
  const [details,setDetails]=useState([])
const [showAdd,setShowAdd]=useState(false)
const [id,setId]=useState(false)
  const fetchData=()=>{
    axios.get(GET_QUTOATION_URL).then((val)=>{
      
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
  const onEditButton=(row)=>{
    setId(row.quotation_id)
    setShowAdd(true)
  }
  return (
    <React.Fragment>
     {!showAdd? <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Employee" />
			
        <Row>
          <Col className="col-12">
          <TableCard
          data={details} 
          tittle={'Quotations'} 
          editIcon={true}
          deleteIcon={true}
          onEditButton={onEditButton}
          />
           
          </Col>
        </Row>
      </div>:
      <AddQuotation quotation_props={id}/>}
    </React.Fragment>
  )
}


const mapStateToProps = state => {
 
  return {  }
}
export default connect(mapStateToProps, { setAlert })(ViewQuotation)


ViewQuotation.propTypes = {
  setAlert: PropTypes.func,
}