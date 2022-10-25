import React, { useEffect, useState } from 'react'
import {
    Row,
    Col
  } from "reactstrap"

export default function AddcompanyComponent({formType,defaultval}) {

const [defalutValues,setDefaultValues]=useState({})

const addCompany=(e)=>{
    e.preventDefault()
    console.log(e)
}
useEffect(()=>{
    console.log(defaultval)
    setDefaultValues(defaultval)
},[defaultval])
  return (
    <form onSubmit={addCompany}>  
    <Row>
      <Col lg={4}>
        <div className="mb-3">
          <label htmlFor="company_code">Company Code</label>
          <input
            type="text"
            defaultValue={defalutValues?.company_code}
            className="form-control"
            id="company_code"
            placeholder="Enter Company Code"
          />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
          <label htmlFor="company_name">Company Name</label>
          <input
            type="text"
            defaultValue={defalutValues?.company_name}
            className="form-control"
            id="company_name"
            placeholder="Enter Company Name"
          />
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            defaultValue={defalutValues?.location}
            className="form-control"
            id="location"
            placeholder="Enter Location"
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
  </form>
  )
}
