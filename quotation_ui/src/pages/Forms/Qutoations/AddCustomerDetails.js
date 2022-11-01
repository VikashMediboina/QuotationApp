import React, { useEffect, useState } from 'react'

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
import { customers, employes } from '../../../Constonts/dummy';

export default function AddCustomerDetails({projectAdd,setprojectAdd,setselectedcustGroup,selectedcustGroup,selectedempGroup,setselectedempGroup}) {
  // const [selectedcustGroup, setselectedcustGroup] = useState(null);
  // const [selectedempGroup, setselectedempGroup] = useState(null);
  const [customerGroup, setcustomerGroup] = useState(null);
  const [employeeGroup, setemployeeGroup] = useState(null);
  const handleSelectGroup=(selectedGroup)=> {
    console.log(selectedGroup)
    setselectedcustGroup(selectedGroup);
    setprojectAdd("")
  }
  const handleEmpSelectGroup=(selectedGroup)=> {
    console.log(selectedGroup)
    setselectedempGroup(selectedGroup);
  }
  useEffect(()=>{
    let custgrup=customers.values.map((customer,index)=>{
        return{
            ...customer,
            label:customer.customer_name,
            value:customer.customer_id
        }
    })
    let empgrup=employes.values.map((employe,index)=>{
      console.log(employe)
      return{
          ...employe,
          label:employe.employee_name,
          value:employe.emp_id
      }
  })
    setcustomerGroup(custgrup)
    setemployeeGroup(empgrup)

  },[])
  
  return (
    <Form>
        
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

       {selectedcustGroup&& <>
        <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtFirstNameBilling"
            className="col-lg-3 col-form-label">Contact Person</label>
          <div className="col-lg-9">
            <Input id="txtFirstNameBilling" name="txtFirstNameBilling"
              type="text" className="form-control" value={selectedcustGroup.customer_name}/>
          </div>
        </Row>
      </Col>
      
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtEmailAddressBilling"
            className="col-lg-3 col-form-label">Email Address</label>
          <div className="col-lg-9">
            <Input id="txtEmailAddressBilling" name="txtEmailAddressBilling"
              type="text" className="form-control" value={selectedcustGroup.customer_email} />
          </div>
        </Row>
      </Col>
    </Row>
    <Row>
    <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtLastNameBilling"
            className="col-lg-3 col-form-label">Mobile No.</label>
          <div className="col-lg-9">
            <Input id="txtLastNameBilling" name="txtLastNameBilling"
              type="text" className="form-control" value={selectedcustGroup.customer_phone_number}  />
          </div>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtCompanyBilling"
            className="col-lg-3 col-form-label">Alternate Mobile No.</label>
          <div className="col-lg-9">
            <Input id="txtCompanyBilling" name="txtCompanyBilling"
              type="text" className="form-control" value={selectedcustGroup.customer_alt_phone_number}/>
          </div>
        </Row>
      </Col>
      



    </Row>
    <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtAddress1Billing"
            className="col-lg-3 col-form-label">Address </label>
          <div className="col-lg-9">
            <textarea id="txtAddress1Billing" name="txtAddress1Billing"
              rows="2" className="form-control"
              value={
                selectedcustGroup.address_1+", "+(selectedcustGroup.address_2?selectedcustGroup.address_2+", ":"")+(selectedcustGroup.address_3?(selectedcustGroup.address_3+", "):"")
                +selectedcustGroup.city+", "+selectedcustGroup.state+", "+selectedcustGroup.country+", Pin:"+selectedcustGroup.pincode
              }
              ></textarea>
          </div>
        </Row>
      </Col>
      
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtAddress2Billing"
            className="col-lg-3 col-form-label">Project Address</label>
          <div className="col-lg-9">
            <textarea id="txtAddress2Billing" name="txtAddress2Billing"
              rows="2" className="form-control" value={projectAdd} onChange={(e)=>{setprojectAdd(e.target.value)}}></textarea>
          </div>
        </Row>
      </Col>
    </Row>
    
    </>}
  </Form>
  )
}
