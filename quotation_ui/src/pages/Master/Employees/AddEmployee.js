import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_EMPLOYEE_URL,UPDATE_EMPLOYEE_URL,VIEW_COMPANY_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'


const AddEmployee = (props) => {
  const {formType,defaultval,onAddButtonClose,login,setAlert,cacheDetails,employees}=props
const [defalutValues,setDefaultValues]=useState({})
const [company,setCompany]=useState([])

const fetchCompanyData=()=>{
  axios.get(VIEW_COMPANY_URL).then((val)=>{
   
    setCompany(company)
    
  }).catch(err=>{
    props.setAlert({
      message:String(err),
      type:"ERROR"
    })
    
  })
}

  const addEmployees=(e,v)=>{
    e.preventDefault()
    if(formType=="Add"){
      var body={
        "employee_name":v.employee_name,
        "employee_code":v.employee_code,
        "employee_email":v.employee_email,
        "reporting_to":v?.reporting_to?v?.reporting_to:"",
        "employee_phone_number":v.employee_phone_number,
        "location":v.location,
        "company_id":v.company_id,
        "password":v.password,
        "start_date":v.start_date,
        "job_code":v.job_code,
        "inserted_by":login.employee_id
    }
     
      axios.post(ADD_EMPLOYEE_URL,body).then((val)=>{
        
          // setAlert({
          //   message:val.data.msg,
          //   type:"SUCCESS"
          // })
          onAddButtonClose(val )
        
      }).catch(err=>{
        setAlert({
          message:String(err),
          type:"ERROR"
        })
        
      })
    }
    else{
      var body={
        "employee_name":v.employee_name,
        "employee_code":v.employee_code,
        "employee_email":v.employee_email,
        "reporting_to":v?.reporting_to?v?.reporting_to:"",
        "employment_id":defaultval.employment_id,
        "company_id":v.company_id,
        "employee_phone_number":v.employee_phone_number,
        "location":v.location,
        "start_date":v.start_date,
        "job_code":v.job_code,
        "updated_by":login.employee_id
    }
      axios.put(UPDATE_EMPLOYEE_URL+defaultval.employee_id,body).then((val)=>{
        
          // setAlert({
          //   message:val.data.msg,
          //   type:"SUCCESS"
          // })
          onAddButtonClose(val )
        
      }).catch(err=>{
        setAlert({
          message:String(err),
          type:"ERROR"
        })
        
      })
    }
    
}
useEffect(()=>{
  setDefaultValues(defaultval)
  fetchCompanyData()
},[defaultval])
  return (
    <React.Fragment>

          {/* Render Breadcrumbs */}
          {/* <Breadcrumbs title="Pages" breadcrumbItem="Add Employee" /> */}

          <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        addEmployees(e, v)
                      }}
                    >
    <Row>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="employee_name"
                          label="Full name"
                          value={defalutValues?.employee_name}
                          className="form-control"
                          placeholder="Enter Full name"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="employee_code"
                          label="Emp-ID"
                          value={defalutValues?.employee_code}
                          className="form-control"
                          placeholder="Enter Emp-ID"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="employee_email"
                          label="Email"
                          value={defalutValues?.employee_email}
                          className="form-control"
                          placeholder="Enter Email"
                          type="text"
                          required
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="employee_phone_number"
                          label="Phone"
                          value={defalutValues?.employee_phone_number}
                          className="form-control"
                          placeholder="Enter Phone"
                          type="number"
                          required
                        />
          
        </div>
      </Col>
     { formType=='Add'&&<Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="password"
                          label="Password"
                          value={defalutValues?.password}
                          className="form-control"
                          placeholder="Enter New password"
                          type="password"
                          required
                        />
          
        </div>
      </Col>}
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="job_code"
                          label="Role"
                          value={defalutValues?.job_code}
                          className="form-control"
                          placeholder="Enter Role"
                          type="select"
                          required
                        >
                          {cacheDetails.job_code.map((codes)=>
                            <option value={codes.key}>
                      {codes.value}
                          </option>
                          )}
                        </AvField>
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="reporting_to"
                          label="Reporting to"
                          value={defalutValues?.reporting_to}
                          className="form-control"
                          placeholder="Enter Reporting to"
                          type="select"
                          // required
                        >
                          <option value="">
                          </option>
{employees.map((codes)=>
                            <option value={codes.employee_id}>
                      {codes.employee_name} ({codes.employee_code})
                          </option>
                          )}

                        </AvField>
          
        </div>
      </Col>
     
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="location"
                          label="Location"
                          value={defalutValues?.location}
                          className="form-control"
                          placeholder="Enter Location"
                          type="text"
                          required
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="start_date"
                          label="Start Date"
                          value={defalutValues?.start_date}
                          className="form-control"
                          placeholder="Enter Start Date"
                          type="date"
                          required
                        />
          
        </div>
        
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="company_id"
                          label="Company"
                          value={defalutValues?.company_id}
                          className="form-control"
                          placeholder="Enter Reporting to"
                          type="select"
                          // required
                        >
                          <option value="">
                          </option>
{employees.map((codes)=>
                            <option value={codes.company_id}>
                      {codes.company_name} ({codes.company_code})
                          </option>
                          )}

                        </AvField>
        </div>
        
      </Col>
     
    </Row>

    <Row>
      <Col lg={12}>
        <div className="text-right">
          <button type="submit" className="btn btn-primary">
            Submit
            </button>
        </div>
      </Col>
    </Row>
  </AvForm>

    </React.Fragment>
  )
}


const mapStateToProps = state => {
 
  const { login } = state?.Login
  const { cacheDetails } = state?.genricReducer
    return {login,cacheDetails}
  }
  
  export default connect(mapStateToProps, { setAlert })(AddEmployee)
  
  AddEmployee.propTypes = {
    setAlert: PropTypes.func,
  }
