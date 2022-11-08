import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'


import {
    Card,
    CardBody,
    Col,
    Form,
    Input,
    Label,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane
  } from "reactstrap"
  import Select from "react-select";
  import {setAlert} from "../../../store/genric/genericAction"
  import {VIEW_EMPLOYEE_URL,VIEW_CUSTOMERS_URL,UPDATE_CUSTOMERS_URL,ADD_CUSTOMER_QUTOATION_URL, GET_CUSTOMER_QUTOATION_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'

const AddCustomerDetails=(props)=> {
  const {setselectedcustGroup,selectedcustGroup,selectedempGroup,setselectedempGroup,formType,changeTab,login,cacheDetails,quotation_id,setquotation_id,setDetails,details}=props
  // const [selectedcustGroup, setselectedcustGroup] = useState(null);
  // const [selectedempGroup, setselectedempGroup] = useState(null);
  const [customerGroup, setcustomerGroup] = useState(null);
  const [employeeGroup, setemployeeGroup] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [employes, setemployes] = useState(null);
  const [defalutValues,setdefalutValues]=useState(null)
  const handleSelectGroup=(selectedGroup)=> {
    console.log(selectedGroup)
    setselectedcustGroup(selectedGroup);
  }
  const handleEmpSelectGroup=(selectedGroup)=> {
    console.log(selectedGroup)
    setselectedempGroup(selectedGroup);
  }
  useEffect(()=>{
    axios.get(VIEW_CUSTOMERS_URL).then((val)=>{
      console.log(val.data)
        // props.setAlert({
        //   message:val.data.msg,
        //   type:"SUCCESS"
        // })
      
        let custgrup=val.data.values.map((customer,index)=>{
          return{
              ...customer,
              label:customer.customer_name,
              value:customer.customer_id
          }

      })
    setcustomerGroup(custgrup)
    setCustomers(val.data.values)

    }).catch(err=>{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
      
    })
    axios.get(VIEW_EMPLOYEE_URL).then((val)=>{
      console.log(val.data)
     
        let empgrup=val.data.values.map((employe,index)=>{
          console.log(employe)
          return{
              ...employe,
              label:employe.employee_name,
              value:employe.emp_id
          }
      })
        setemployeeGroup(empgrup)
        setemployes(val.data.values)
      
    }).catch(err=>{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
      
    })



    if(quotation_id){

      axios.get(GET_CUSTOMER_QUTOATION_URL+quotation_id).then((val)=>{
        console.log(val.data)
        // setDetails(val.da)
         
        
      }).catch(err=>{
        props.setAlert({
          message:String(err),
          type:"ERROR"
        })
        
      })

    }
   

  },[])
  const addCustomers=(e,v)=>{
    e.preventDefault()
      let body={
        "customer_name":v.customer_name,
        "cust_profile":v.cust_profile,
        "mail_id":v.customer_email,
        "address_2":v?.p_address_2,
        "quotation_date":new Date(),
        "customer_id":v.customer_id,
        "lead_by":employeeGroup.employee_id,
        "lead_by_name":employeeGroup.employee_name,
        "shop_manager_id":employeeGroup?.reporting_to,
        "city":v.p_city,
        "country":v.p_country,
        "mobile_1":v.customer_phone_number,
        "address_3":v.p_address_3,
        "state":v.p_state,
        "address_1":v.p_address_1,
        "pin_code":v.p_pin_code,
        "updated_by":login.employee_id,
        "quotation_date":new Date(),
        "quot_status":cacheDetails?.status_code[0]

    }
     
      axios.post(ADD_CUSTOMER_QUTOATION_URL,body).then((val)=>{
        console.log(val.data)
          // setAlert({
          //   message:val.data.msg,
          //   type:"SUCCESS"
          // })
          setDetails(body)
          setquotation_id(val.data.quotation_id)
          changeTab(2 )
        
      }).catch(err=>{
        setAlert({
          message:String(err),
          type:"ERROR"
        })
        
      })
    
    
}

  return (
    <>
   
   <Row>
      <Col md={6} >

      <Row  className="mb-3">
                    <label slot='start' className="col-lg-3 col-form-label">Customer</label>
                    <div className="col-lg-9">
                    <Select
                      value={selectedcustGroup}
                      onChange={
                        handleSelectGroup
                      }
                      options={customerGroup}
                      classNamePrefix="select2-selection"
                    />
                    </div>
                  </Row>
        </Col>
        <Col md={6} >

      <Row  className="mb-3">
                    <label slot='start' className="col-lg-3 col-form-label">Assigne</label>
                    <div className="col-lg-9">
                    <Select
                      value={selectedempGroup}
                      onChange={
                        handleEmpSelectGroup
                      }
                      options={employeeGroup}
                      classNamePrefix="select2-selection"
                    />
                    </div>
                  </Row>
        </Col>
        </Row>

{selectedcustGroup&& <AvForm
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
                          value={selectedcustGroup?.customer_name}
                          className="form-control"
                          placeholder="Enter Full name"
                          type="text"
                          disabled
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="customer_id"
                          label="Customer Id"
                          value={selectedcustGroup?.customer_id}
                          className="form-control"
                          placeholder="Enter Full name"
                          type="text"
                          disabled
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="cust_profile"
                          label="Customer Profile"
                          value={selectedcustGroup?.cust_profile}
                          className="form-control"
                          placeholder="Enter Customer Profile"
                          type="text"
                          required
                          disabled
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="customer_email"
                          label="Email"
                          value={selectedcustGroup?.customer_email}
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
                          value={selectedcustGroup?.customer_phone_number}
                          className="form-control"
                          placeholder="Enter Phone"
                          type="number"
                          required
                        />
          
        </div>
      </Col>
   </Row>
   <Row>
    <h4> Main Address</h4>
   </Row>
   <Row>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="address_1"
                          label="Address 1"
                          value={selectedcustGroup?.address_1}
                          className="form-control"
                          placeholder="Enter Address 1"
                          type="text"
                          disabled
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
                          value={selectedcustGroup?.address_2}
                          className="form-control"
                          placeholder="Enter Address 2"
                          disabled
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
                          value={selectedcustGroup?.address_3}
                          className="form-control"
                          placeholder="Enter Address 3"
                          disabled
                          type="text"
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="city"
                          label="City"
                          value={selectedcustGroup?.city}
                          className="form-control"
                          placeholder="Enter City"
                          disabled
                          type="text"
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="state"
                          label="state"
                          value={selectedcustGroup?.state}
                          className="form-control"
                          placeholder="Enter state"
                          disabled
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
                          value={selectedcustGroup?.country}
                          className="form-control"
                          placeholder="Enter Country"
                          disabled
                          type="text"
                          // required
                        >
                          
                        </AvField>
        </div>
        
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="pin_code"
                          label="Pin Code"
                          value={selectedcustGroup?.pin_code}
                          className="form-control"
                          placeholder="Enter Pin Code"
                          disabled
                          type="number"
                          // required
                        >
                          
                        </AvField>
        </div>
        
      </Col>
     
    </Row>
    <Row>
    <h4> Project Address</h4>
   </Row>
   <Row>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="p_address_1"
                          label="Address 1"
                          // value={selectedcustGroup?.address_1}
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
                          name="p_address_2"
                          label="Address 2"
                          // value={selectedcustGroup?.address_2}
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
                          name="p_address_3"
                          label="Address 3"
                          // value={selectedcustGroup?.address_3}
                          className="form-control"
                          placeholder="Enter Address 3"
                          type="text"
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="p_city"
                          label="City"
                          // value={selectedcustGroup?.city}
                          className="form-control"
                          placeholder="Enter City"
                          required
                          type="text"
                        />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="p_state"
                          label="state"
                          // value={selectedcustGroup?.state}
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
                          name="p_country"
                          label="Country"
                          // value={selectedcustGroup?.country}
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
                          name="p_pin_code"
                          label="Pin Code"
                          // value={selectedcustGroup?.country}
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
      <Col lg={12}>{console.log(selectedempGroup)}
        <div className="float-end text-right">
          <button type="submit" className="btn btn-primary" disabled={!selectedempGroup}>
            Save Draft
            </button>
        </div>
      </Col>
    </Row>
  </AvForm>}



  
  </>
  )
}



const mapStateToProps = state => {
 
  const { login } = state?.Login
  const { cacheDetails } = state?.genricReducer
    return {login,cacheDetails}
  }
export default connect(mapStateToProps, { setAlert })(AddCustomerDetails)


AddCustomerDetails.propTypes = {
  setAlert: PropTypes.func,
}