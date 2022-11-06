import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_COMPANY_URL,UPDATE_COMPANY_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'



const   AddcompanyComponent=(props) =>{
  const {formType,defaultval,onAddButtonClose,login,setAlert}=props
const [defalutValues,setDefaultValues]=useState({})

const addCompany=(e,v)=>{
    e.preventDefault()
   
    if(formType=="Add"){
      var body={
        "company_code":v.company_code,
        "company_name":v.company_name,
        "location":v.location,
        "inserted_by":login.employee_id
    }
     
      axios.post(ADD_COMPANY_URL,body).then((val)=>{
        console.log(val.data)
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
        "company_code":v.company_code,
        "company_name":v.company_name,
        "location":v.location,
        "updated_by":login.employee_id
    }
      axios.put(UPDATE_COMPANY_URL+defaultval.company_id,body).then((val)=>{
        console.log(val.data)
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
    
    console.log(e)
}
useEffect(()=>{
    console.log(defaultval)
    setDefaultValues(defaultval)
},[defaultval])
  return (
    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        addCompany(e, v)
                      }}
                    >
    <Row>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="company_code"
                          label="Company Code"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.company_code}
                          className="form-control"
                          placeholder="Enter Company Code"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="company_name"
                          label="Company Name"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.company_name}
                          className="form-control"
                          placeholder="Enter Company Name"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="location"
                          label="Location"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.location}
                          className="form-control"
                          placeholder="Enter Location"
                          type="text"
                          required
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
  )
}
const mapStateToProps = state => {
 
const { login } = state?.Login
  return {login}
}

export default connect(mapStateToProps, { setAlert })(AddcompanyComponent)

AddcompanyComponent.propTypes = {
  setAlert: PropTypes.func,
}