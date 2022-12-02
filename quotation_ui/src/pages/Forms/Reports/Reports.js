
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"

import React, { useEffect, useState } from "react"
import { GET_REPORTS } from "../../../Constonts/api"
import axios from "axios"
import { connect } from "react-redux"
import {setAlert} from "../../../store/genric/genericAction"
import PropTypes from 'prop-types'
import Select from "react-select";
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const Reports = (props) => {
  const {login}=props
  const [details,setDetails]=useState([])
  const [reportingEmp,setReportingEmp]=useState([])
  const [selectedcustGroup1, setselectedcustGroup1] = useState(null);
	 const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      }, 

    ],
  }
	
	const fetchData=(emp)=>{
   axios.get(GET_REPORTS+login?.company_id+"/"+emp.employee_id).then((val)=>{
     
       // props.setAlert({
       //   message:val.data.msg,
       //   type:"SUCCESS"
       // })
       const data = {

        columns: [
          {
            label: "Status",
            field: "quot_status",
            sort: "asc",
            width: 150,
          },
          {
            label: "Count",
            field: "count",
            sort: "asc",
            width: 270,
          }
        ],
         rows:val.data.values}
         console.log(val.data)
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
 const handleSelectGroup=(selectedGroup)=> {
  fetchData(selectedGroup)
  setselectedcustGroup1(selectedGroup);
}
 useEffect(()=>{
  let emp=login?.reported_employees.map((employe,index)=>{
    return{
        ...employe,
        label:employe.employee_name,
        value:employe.employee_id
    }
})
setReportingEmp(emp)
if(emp?.length>0){
    fetchData(emp?.[0])
setselectedcustGroup1(emp?.[0]);
}
 },[])

  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Employee" />
			
        <Row>
          <Col className="col-12">
            <Card>
              <CardBody>
              <Row>
                               <Col size={6}>
                               <Select 
                             value={selectedcustGroup1}
                             onChange={
                               handleSelectGroup
                             }
                             
                             options={reportingEmp}
                             classNamePrefix="select2-selection"
                            placeholder="Select Employee"
                            />
                               </Col>
                           </Row>
                              
                <CardTitle>Reports</CardTitle>
                <CardSubtitle className="mb-3">
                   
                  </CardSubtitle>

                <MDBDataTable responsive striped bordered data={details} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  )
}
const mapStateToProps = state => {
  const { cacheDetails } = state?.genricReducer
  const { login } = state?.Login
 
  return {  cacheDetails,login}
}
export default connect(mapStateToProps, { setAlert })(Reports);

Reports.propTypes = {
  setAlert: PropTypes.func,
}