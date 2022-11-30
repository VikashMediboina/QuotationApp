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
          "q_add":state.q_add,
          "q_edit":state.q_edit,
          "q_view":state.q_view,
          "q_delete":state.q_delete,
          "c_add":state.c_add,
          "c_edit":state.c_edit,
          "c_view":state.c_view,
          "c_delete":state.c_delete,
          "company_add":state.company_add,
          "company_edit":state.company_edit,
          "company_view":state.company_view,
          "company_delete":state.company_delete,
          "emp_add":state.emp_add,
          "emp_edit":state.emp_edit,
          "emp_view":state.emp_view,
          "emp_delete":state.emp_delete,
          "cat_add":state.cat_add,
          "cat_edit":state.cat_edit,
          "cat_view":state.cat_view,
          "cat_delete":state.cat_delete,
          "main_add":state.main_add,
          "main_edit":state.main_edit,
          "main_view":state.main_view,
          "main_delete":state.main_delete,
          "line_add":state.line_add,
          "line_edit":state.line_edit,
          "line_view":state.line_view,
          "line_delete":state.line_delete
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
          "q_add":state.q_add,
          "q_edit":state.q_edit,
          "q_view":state.q_view,
          "q_delete":state.q_delete,
          "c_add":state.c_add,
          "c_edit":state.c_edit,
          "c_view":state.c_view,
          "c_delete":state.c_delete,
          "company_add":state.company_add,
          "company_edit":state.company_edit,
          "company_view":state.company_view,
          "company_delete":state.company_delete,
          "emp_add":state.emp_add,
          "emp_edit":state.emp_edit,
          "emp_view":state.emp_view,
          "emp_delete":state.emp_delete,
          "cat_add":state.cat_add,
          "cat_edit":state.cat_edit,
          "cat_view":state.cat_view,
          "cat_delete":state.cat_delete,
          "main_add":state.main_add,
          "main_edit":state.main_edit,
          "main_view":state.main_view,
          "main_delete":state.main_delete,
          "line_add":state.line_add,
          "line_edit":state.line_edit,
          "line_view":state.line_view,
          "line_delete":state.line_delete
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
  // setState({

  // })
  fetchCompanyData()
},[defaultval])
const job_code_change=(e,val)=>{
  for(let i=0;i<cacheDetails.job_code.length;i++){
    if(cacheDetails.job_code[i].key===val){
      setState(cacheDetails.job_code[i].access)
      break
    }
  }
}
const changeCheckbox=(val,index)=>{
  state[index]=val;
  setState({...state})
}
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
                          onChange={(e,val)=>{job_code_change(e,val)}}
                          required
                        >
                          <option value="">
                          </option>
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

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="q_view"
                    name="q_view"
                    checked={state.q_view}
                    onChange={() => {
                      changeCheckbox(!state.q_view,'q_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="q_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="q_edit"
                    name="q_edit"
                    checked={state.q_edit}
                    onChange={() => {
                      changeCheckbox(!state.q_edit,'q_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="q_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="q_add"
                    name="q_add"
                    checked={state.q_add}
                    onChange={() => {
                      changeCheckbox(!state.q_add,'q_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="q_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="q_delete"
                    name="q_delete"
                    checked={state.q_delete}
                    onChange={() => {
                      changeCheckbox(!state.q_delete,'q_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="q_delete">
                  Delete
                  </label>
        
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
        <div className="form-check mb-3">{console.log(state.q_view)}

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="c_view"
                    name="c_view"
                    checked={state.c_view}
                    onChange={() => {
                      changeCheckbox(!state.c_view,'c_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="c_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="c_edit"
                    name="c_edit"
                    checked={state.c_edit}
                    onChange={() => {
                      changeCheckbox(!state.c_edit,'c_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="c_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="c_add"
                    name="c_add"
                    checked={state.c_add}
                    onChange={() => {
                      changeCheckbox(!state.c_add,'c_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="c_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="c_delete"
                    name="c_delete"
                    checked={state.c_delete}
                    onChange={() => {
                      changeCheckbox(!state.c_delete,'c_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="c_delete">
                  Delete
                  </label>
        
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
        <div className="form-check mb-3">{console.log(state.q_view)}

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="company_view"
                    name="company_view"
                    checked={state.company_view}
                    onChange={() => {
                      changeCheckbox(!state.company_view,'company_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="company_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="company_edit"
                    name="company_edit"
                    checked={state.company_edit}
                    onChange={() => {
                      changeCheckbox(!state.company_edit,'company_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="company_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="company_add"
                    name="company_add"
                    checked={state.company_add}
                    onChange={() => {
                      changeCheckbox(!state.company_add,'company_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="company_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="company_delete"
                    name="company_delete"
                    checked={state.company_delete}
                    onChange={() => {
                      changeCheckbox(!state.company_delete,'company_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="company_delete">
                  Delete
                  </label>
        
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
        <div className="form-check mb-3">{console.log(state.q_view)}

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="emp_view"
                    name="emp_view"
                    checked={state.emp_view}
                    onChange={() => {
                      changeCheckbox(!state.emp_view,'emp_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="emp_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="emp_edit"
                    name="emp_edit"
                    checked={state.emp_edit}
                    onChange={() => {
                      changeCheckbox(!state.emp_edit,'emp_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="emp_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="emp_add"
                    name="emp_add"
                    checked={state.emp_add}
                    onChange={() => {
                      changeCheckbox(!state.emp_add,'emp_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="emp_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="emp_delete"
                    name="emp_delete"
                    checked={state.emp_delete}
                    onChange={() => {
                      changeCheckbox(!state.emp_delete,'emp_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="emp_delete">
                  Delete
                  </label>
        
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
        <div className="form-check mb-3">{console.log(state.q_view)}

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="cat_view"
                    name="cat_view"
                    checked={state.cat_view}
                    onChange={() => {
                      changeCheckbox(!state.cat_view,'cat_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="cat_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="cat_edit"
                    name="cat_edit"
                    checked={state.cat_edit}
                    onChange={() => {
                      changeCheckbox(!state.cat_edit,'cat_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="cat_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="cat_add"
                    name="cat_add"
                    checked={state.cat_add}
                    onChange={() => {
                      changeCheckbox(!state.cat_add,'cat_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="cat_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="cat_delete"
                    name="cat_delete"
                    checked={state.cat_delete}
                    onChange={() => {
                      changeCheckbox(!state.cat_delete,'cat_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="cat_delete">
                  Delete
                  </label>
        
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
        <div className="form-check mb-3">{console.log(state.q_view)}

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="main_view"
                    name="main_view"
                    checked={state.main_view}
                    onChange={() => {
                      changeCheckbox(!state.main_view,'main_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="main_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="main_edit"
                    name="main_edit"
                    checked={state.main_edit}
                    onChange={() => {
                      changeCheckbox(!state.main_edit,'main_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="main_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="main_add"
                    name="main_add"
                    checked={state.main_add}
                    onChange={() => {
                      changeCheckbox(!state.main_add,'main_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="main_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="main_delete"
                    name="main_delete"
                    checked={state.main_delete}
                    onChange={() => {
                      changeCheckbox(!state.main_delete,'main_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="main_delete">
                  Delete
                  </label>
        
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
        <div className="form-check mb-3">{console.log(state.q_view)}

        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="line_view"
                    name="line_view"
                    checked={state.line_view}
                    onChange={() => {
                      changeCheckbox(!state.line_view,'line_view')
                    }}
                  />

                  <label className="form-check-label" htmlFor="line_view">
                  View
                  </label>

        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="line_edit"
                    name="line_edit"
                    checked={state.line_edit}
                    onChange={() => {
                      changeCheckbox(!state.line_edit,'line_edit')
                    }}
                  />

                  <label className="form-check-label" htmlFor="line_edit">
                  Edit
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="line_add"
                    name="line_add"
                    checked={state.line_add}
                    onChange={() => {
                      changeCheckbox(!state.line_add,'line_add')
                    }}
                  />

                  <label className="form-check-label" htmlFor="line_add">
                  Add
                  </label>
        </div>
        
      </Col>
      <Col lg={3}>
        <div className="form-check mb-3">
        <input
                    type="checkbox"
                    className="form-check-input checkbox"
                    id="line_delete"
                    name="line_delete"
                    checked={state.line_delete}
                    onChange={() => {
                      changeCheckbox(!state.line_delete,'line_delete')
                    }}
                  />

                  <label className="form-check-label" htmlFor="line_delete">
                  Delete
                  </label>
        
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
