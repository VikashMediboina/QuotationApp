
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_CUSTOMERS_URL,UPDATE_CUSTOMERS_URL,VIEW_COMPANY_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'

const AddCustomer = (props) => {
  const {formType,defaultval,onAddButtonClose,login,setAlert,cacheDetails,employees}=props
  const [defalutValues,setDefaultValues]=useState({})
  const [company,setCompany]=useState([])
  
  const fetchCompanyData=(props)=>{
    axios.get(VIEW_COMPANY_URL).then((val)=>{
     
      setCompany(company)
      
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
  
    const addCustomers=(e,v)=>{
      e.preventDefault()
      if(formType=="Add"){
        var body={
          "customer_name":v.customer_name,
          "cust_profile":v.cust_profile,
          "customer_email":v.customer_email,
          "address_2":v?.address_2?v?.address_2:"",
          "customer_phone_number":v.customer_phone_number,
          "address_3":v.address_3,
          "country":v.country,
          "city":v.city,
          "customer_alt_phone_number":v.customer_alt_phone_number,
          "state":v.state,
          "pin_code":v.pin_code,
          "address_1":v.address_1,
          "inserted_by":login.employee_id
      }
       
        axios.post(ADD_CUSTOMERS_URL,body).then((val)=>{
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
          "customer_name":v.customer_name,
          "cust_profile":v.cust_profile,
          "customer_email":v.customer_email,
          "address_2":v?.address_2,
          "address_id":defaultval.address_id,
          "city":v.city,
          "country":v.country,
          "customer_phone_number":v.customer_phone_number,
          "address_3":v.address_3,
          "state":v.state,
          "pin_code":v.pin_code,
          "address_1":v.address_1,
          "updated_by":login.employee_id
      }
        axios.put(UPDATE_CUSTOMERS_URL+defaultval.customer_id,body).then((val)=>{
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
    fetchCompanyData()
  },[defaultval])
  return (
    <React.Fragment>
      {/* <div className="page-content"> */}

          {/* Render Breadcrumbs */}
          <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                       addCustomers(e, v)
                      }}
                    >
    <Row>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="customer_name"
                          label="Full name"
                          value={defalutValues?.customer_name}
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
                          name="cust_profile"
                          label="Customer Profile"
                          value={defalutValues?.cust_profile}
                          className="form-control"
                          placeholder="Enter Customer Profile"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="customer_email"
                          label="Email"
                          value={defalutValues?.customer_email}
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
                          name="customer_phone_number"
                          label="Phone"
                          value={defalutValues?.customer_phone_number}
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
                          name="customer_alt_phone_number"
                          label="Alternate Phone Number"
                          value={defalutValues?.customer_alt_phone_number}
                          className="form-control"
                          placeholder="Enter New customer_alt_phone_number"
                          type="number"
                          required
                        />
          
        </div>
      </Col>}
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="address_1"
                          label="Address 1"
                          value={defalutValues?.address_1}
                          className="form-control"
                          placeholder="Enter Address 1"
                          type="text"
                          required
                        >
                         
                        </AvField>
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="address_2"
                          label="Address 2"
                          value={defalutValues?.address_2}
                          className="form-control"
                          placeholder="Enter Address 2"
                          type="text"
                          // required
                        >
                        

                        </AvField>
          
        </div>
      </Col>
     
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="address_3"
                          label="Address 3"
                          value={defalutValues?.address_3}
                          className="form-control"
                          placeholder="Enter Address 3"
                          type="text"
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="city"
                          label="City"
                          value={defalutValues?.city}
                          className="form-control"
                          placeholder="Enter City"
                          type="text"
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="state"
                          label="state"
                          value={defalutValues?.state}
                          className="form-control"
                          placeholder="Enter state"
                          type="text"
                          required
                        />
          
        </div>
        
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="country"
                          label="Country"
                          value={defalutValues?.country}
                          className="form-control"
                          placeholder="Enter Country"
                          type="text"
                          required
                        >
                          
                        </AvField>
        </div>
        
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="pin_code"
                          label="Pin Code"
                          value={defalutValues?.pin_code}
                          className="form-control"
                          placeholder="Enter Pin Code"
                          type="number"
                          required
                        >
                          
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
      {/* </div> */}
    </React.Fragment>
  )
}

const mapStateToProps = state => {
 
  const { login } = state?.Login
  const { cacheDetails } = state?.genricReducer
    return {login,cacheDetails}
  }
  
  export default connect(mapStateToProps, { setAlert })(AddCustomer)
  
  AddCustomer.propTypes = {
    setAlert: PropTypes.func,
  }

