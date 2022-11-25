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
  import {VIEW_EMPLOYEE_URL,VIEW_CUSTOMERS_URL,UPDATE_CUSTOMER_QUTOATION_URL,ADD_CUSTOMER_QUTOATION_URL, GET_CUSTOMER_QUTOATION_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'

const AddCustomerDetails=(props)=> {
  const {setselectedcustGroup,selectedcustGroup,selectedempGroup,setselectedempGroup,formType,changeTab,login,cacheDetails,clone_id,quotation_id,setquotation_id,setDetails,details}=props
  // const [selectedcustGroup, setselectedcustGroup] = useState(null);
  const [selectedempGroup1, setselectedempGroup1] = useState(null);
  const [selectedcustGroup1, setselectedcustGroup1] = useState(null);
  const [customerGroup, setcustomerGroup] = useState(null);
  const [employeeGroup, setemployeeGroup] = useState(null);
  const [customers, setCustomers] = useState(null);
  const [employes, setemployes] = useState(null);
  const [fromCust,setFromCust]=useState(null)
  const [defalutValues,setdefalutValues]=useState(null)
  const handleSelectGroup=(selectedGroup)=> {
    setselectedcustGroup1(selectedGroup);
    setselectedcustGroup(selectedGroup);
  }
  const handleEmpSelectGroup=(selectedGroup)=> {
    setselectedempGroup(selectedGroup);
    setselectedempGroup1(selectedGroup)
  }
  useEffect(()=>{
    axios.get(VIEW_CUSTOMERS_URL).then((val)=>{
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
      axios.get(VIEW_EMPLOYEE_URL).then((val)=>{
      
        let empgrup=val.data.values.map((employe,index)=>{
          return{
              ...employe,
              label:employe.employee_name,
              value:employe.emp_id
          }
      })
      // empgrup=empgrup.filter((row)=>row.job_code=="SalesOfficer")
        setemployeeGroup(empgrup)
        setemployes(val.data.values)
      fetchDetails(empgrup,custgrup)
    }).catch(err=>{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
      
    })

    setcustomerGroup(custgrup)
    setCustomers(val.data.values)

    }).catch(err=>{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
      
    })
   



   
   

  },[])

  const fetchDetails=(empgrup,custgrup)=>{
    if(quotation_id || clone_id){
      console.log(clone_id)
      var id=quotation_id?quotation_id:clone_id
      axios.get(GET_CUSTOMER_QUTOATION_URL+id).then((val)=>{
        
        // setDetails(val.da)
        console.log(val.data,empgrup,custgrup)
        for(let i=0;i<empgrup.length;i++){
          if(empgrup[i].employee_id==val.data.values[0].lead_by){
            setselectedempGroup(empgrup[i])
            setselectedempGroup1(empgrup[i])
          }
        }
        for(let i=0;i<custgrup.length;i++){
          if(custgrup[i].customer_id==val.data.values[0].customer_id){
            console.log("inside",)
            setselectedcustGroup(custgrup[i])
            setselectedcustGroup1(custgrup[i])
          }
        }
        setFromCust(val.data.values[0])
        
      }).catch(err=>{
        props.setAlert({
          message:String(err),
          type:"ERROR"
        })
        
      })

    }
  }
  useEffect(()=>{
    fetchDetails(employeeGroup,customers)
  },[quotation_id,employeeGroup,customers,clone_id])
  const addCustomers=(e,v)=>{
    e.preventDefault()
      let body={
        "customer_name":v.customer_name,
        "cust_profile":v.cust_profile,
        "mail_id":v.customer_email,
        "address_2":v?.p_address_2,
        "quotation_date":new Date(),
        "customer_id":v.customer_id,
        "lead_by":selectedempGroup1.employee_id,
        "lead_by_name":selectedempGroup1.employee_name,
        "shop_manager_id":selectedempGroup1?.reporting_to,
        "city":v.p_city,
        "country":v.p_country,
        "mobile_1":v.customer_phone_number,
        "address_3":v.p_address_3,
        "state":v.p_state,
        "address_1":v.p_address_1,
        "pin_code":Number(v.p_pin_code),
        "updated_by":login.employee_id,
        "inserted_by":login.employee_id,
        "quotation_date":new Date(),
        "quot_status":fromCust?.quot_status?fromCust?.quot_status:cacheDetails?.status_code[0]

    }
     let url=quotation_id? UPDATE_CUSTOMER_QUTOATION_URL+quotation_id: ADD_CUSTOMER_QUTOATION_URL
      axios.post(url,body).then((val)=>{
        
          // setAlert({
          //   message:val.data.msg,
          //   type:"SUCCESS"
          // })
          setDetails(body)
          setquotation_id(val.data.quotation_id?val.data.quotation_id:quotation_id)
          console.log(details)
          if(details.quot_status!=cacheDetails?.status_code[0] && details.quot_status){
            changeTab(3)
          }
          else{
            changeTab(2)
          }
        
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

      {formType!="Edit"&&<Row  className="mb-3">
                    <label slot='start' className="col-lg-3 col-form-label">Customer</label>
                    <div className="col-lg-9">
                    <Select
                      value={selectedcustGroup1}
                      onChange={
                        handleSelectGroup
                      }
                      
                      options={customerGroup}
                      classNamePrefix="select2-selection"
                    />
                    </div>
                  </Row>}
        </Col>
        <Col md={6} >

      <Row  className="mb-3">
                    <label slot='start' className="col-lg-3 col-form-label">Assigne</label>
                    <div className="col-lg-9">
                    <Select
                      value={selectedempGroup1}
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
                          value={fromCust?fromCust.mail_id:selectedcustGroup?.customer_email}
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
                          value={fromCust?fromCust.mobile_1:selectedcustGroup?.customer_phone_number}
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
                          value={fromCust?fromCust.address_1:""}
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
                          value={fromCust?fromCust.address_2:""}

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
                          value={fromCust?fromCust.address_3:""}

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
                          value={fromCust?fromCust.city:""}

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
                          value={fromCust?fromCust.state:""}

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
                          value={fromCust?fromCust.country:""}

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
                          value={fromCust?fromCust.pin_code:""}

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
      <Col lg={12}>
        <div className="float-end text-right">
          <button type="submit" className="btn btn-primary" disabled={!selectedempGroup1}>
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