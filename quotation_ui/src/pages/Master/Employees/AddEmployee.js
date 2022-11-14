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
const [state,setState]=useState({
  "q_add":defaultval?.access?.q_add?true:false,
          "q_edit":defaultval?.access?.q_edit?true:false,
          "q_view":defaultval?.access?.q_view?true:false,
          "q_delete":defaultval?.access?.q_delete?true:false,
          "c_add":defaultval?.access?.c_add?true:false,
          "c_edit":defaultval?.access?.c_edit?true:false,
          "c_view":defaultval?.access?.c_view?true:false,
          "c_delete":defaultval?.access?.c_delete?true:false,
          "company_add":defaultval?.access?.company_add?true:false,
          "company_edit":defaultval?.access?.company_edit?true:false,
          "company_view":defaultval?.access?.company_view?true:false,
          "company_delete":defaultval?.access?.company_delete?true:false,
          "emp_add":defaultval?.access?.emp_add?true:false,
          "emp_edit":defaultval?.access?.emp_edit?true:false,
          "emp_view":defaultval?.access?.emp_view?true:false,
          "emp_delete":defaultval?.access?.emp_delete?true:false,
          "cat_add":defaultval?.access?.cat_add?true:false,
          "cat_edit":defaultval?.access?.cat_edit?true:false,
          "cat_view":defaultval?.access?.cat_view?true:false,
          "cat_delete":defaultval?.access?.cat_delete?true:false,
          "main_add":defaultval?.access?.main_add?true:false,
          "main_edit":defaultval?.access?.main_edit?true:false,
          "main_view":defaultval?.access?.main_view?true:false,
          "main_delete":defaultval?.access?.main_delete?true:false,
          "line_add":defaultval?.access?.line_add?true:false,
          "line_edit":defaultval?.access?.line_edit?true:false,
          "line_view":defaultval?.access?.line_view?true:false,
          "line_delete":defaultval?.access?.line_delete?true:false
})
const fetchCompanyData=()=>{
  axios.get(VIEW_COMPANY_URL).then((val)=>{
   
    setCompany(val.data.values)
    
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

  const addEmployees=(e,v)=>{
    e.preventDefault()
    console.log(e,v)
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
        "access":{
          "q_add":v.q_add,
          "q_edit":v.q_edit,
          "q_view":v.q_view,
          "q_delete":v.q_delete,
          "c_add":v.c_add,
          "c_edit":v.c_edit,
          "c_view":v.c_view,
          "c_delete":v.c_delete,
          "company_add":v.company_add,
          "company_edit":v.company_edit,
          "company_view":v.company_view,
          "company_delete":v.company_delete,
          "emp_add":v.emp_add,
          "emp_edit":v.emp_edit,
          "emp_view":v.emp_view,
          "emp_delete":v.emp_delete,
          "cat_add":v.cat_add,
          "cat_edit":v.cat_edit,
          "cat_view":v.cat_view,
          "cat_delete":v.cat_delete,
          "main_add":v.main_add,
          "main_edit":v.main_edit,
          "main_view":v.main_view,
          "main_delete":v.main_delete,
          "line_add":v.line_add,
          "line_edit":v.line_edit,
          "line_view":v.line_view,
          "line_delete":v.line_delete
        },
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
        "access":{
          "q_add":v.q_add,
          "q_edit":v.q_edit,
          "q_view":v.q_view,
          "q_delete":v.q_delete,
          "c_add":v.c_add,
          "c_edit":v.c_edit,
          "c_view":v.c_view,
          "c_delete":v.c_delete,
          "company_add":v.company_add,
          "company_edit":v.company_edit,
          "company_view":v.company_view,
          "company_delete":v.company_delete,
          "emp_add":v.emp_add,
          "emp_edit":v.emp_edit,
          "emp_view":v.emp_view,
          "emp_delete":v.emp_delete,
          "cat_add":v.cat_add,
          "cat_edit":v.cat_edit,
          "cat_view":v.cat_view,
          "cat_delete":v.cat_delete,
          "main_add":v.main_add,
          "main_edit":v.main_edit,
          "main_view":v.main_view,
          "main_delete":v.main_delete,
          "line_add":v.line_add,
          "line_edit":v.line_edit,
          "line_view":v.line_view,
          "line_delete":v.line_delete
        },
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
    
}
useEffect(()=>{
  setDefaultValues(defaultval)
  setState({

  })
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
                          value={new Date(defalutValues?.start_date)}
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
                          required
                        >
                          <option value="">
                          </option>
{company.map((codes)=>
                            <option value={codes.company_id}>
                      {codes.company_name} ({codes.company_code})
                          </option>
                          )}

                        </AvField>
        </div>
        
      </Col>
     
    </Row>

    <Row>
    <h6>
      Quotation
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">{console.log(state.q_view)}
        <AvField  
        className="form-check-label"
                          name="q_view"
                          label="&nbsp;&nbsp;View"
                          value={state.q_view?true:false}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="q_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.q_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="q_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.q_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="q_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.q_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      </Row>
     

      <Row>
    <h6>
    Customers
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="c_view"
                          label="&nbsp;&nbsp;View"
                          value={state.c_view}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="c_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.c_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="c_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.c_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="c_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.c_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      </Row>
     
      <Row>
    <h6>
    Company
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="company_view"
                          label="&nbsp;&nbsp;View"
                          value={state.company_view}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="company_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.company_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="company_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.company_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="company_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.company_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      </Row>
     
      <Row>
    <h6>
      Employee
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="emp_view"
                          label="&nbsp;&nbsp;View"
                          value={state.emp_view}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="emp_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.emp_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="emp_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.emp_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="emp_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.emp_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      </Row>
     
      <Row>
    <h6>
      Catogreies
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="cat_view"
                          label="&nbsp;&nbsp;View"
                          value={state.cat_view}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="cat_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.cat_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="cat_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.cat_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="cat_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.cat_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      </Row>
     
      <Row>
    <h6>
      Main Items
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="main_view"
                          label="&nbsp;&nbsp;View"
                          value={state.main_view}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="main_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.main_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="main_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.main_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="main_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.main_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      </Row>
     

      <Row>
    <h6>
      Line Items
    </h6>
    <hr></hr>
</Row>

<Row>
<Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="line_view"
                          label="&nbsp;&nbsp;View"
                          value={state.line_view}
                          className="form-control"
                          placeholder="Enter View"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="line_edit"
                          label="&nbsp;&nbsp;Edit"
                          value={state.line_edit}
                          className="form-control"
                          placeholder="Enter Edit"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="line_add"
                          label="&nbsp;&nbsp;Add"
                          value={state.line_add}
                          className="form-control"
                          placeholder="Enter Add"
                          type="checkbox"
                        />
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <AvField  
        className="form-check-label"
                          name="line_delete"
                          label="&nbsp;&nbsp;Delete"
                          value={state.line_delete}
                          className="form-control"
                          placeholder="Enter Delete"
                          type="checkbox"
                        />
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
