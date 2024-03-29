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
const [image,setImage]=useState(null)
const getBase64=(file,func) =>{
  let document = "";
  // var files = file[0];
  // console.log(file,files)
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
      func(reader.result);
  };
  reader.onerror = function (error) {
      console.log('Error: ', error);
  };

}
const onImageChange=(e)=>{
  console.log(e.target.files[0])
  getBase64(e.target.files[0],(doc)=>{
    setImage(doc)
    console.log(doc)
  })
}

const addCompany=(e,v)=>{
    e.preventDefault()
   
    if(formType=="Add"){
      var body={
        "company_code":v.company_code,
        "company_name":v.company_name,
        "location":v.location,
        "inserted_by":login.employee_id,
        "company_logo":image.split(',')[1]
    }
     
      axios.post(ADD_COMPANY_URL,body).then((val)=>{
        
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
        "company_code":v.company_code,
        "company_name":v.company_name,
        "location":v.location,
        "updated_by":login.employee_id,
        "company_logo":image.split(',')[1]
    }
      axios.put(UPDATE_COMPANY_URL+defaultval.company_id,body).then((val)=>{
        
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
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="company_logo"
                          label="Logo"
                          // value="admin@themesbrand.com"
                          // value={defalutValues?.company_logo}
                          onChange={(e)=>onImageChange(e)}
                          className="form-control"
                          placeholder="Logo"
                          type="file"
                          accept="image/png"
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