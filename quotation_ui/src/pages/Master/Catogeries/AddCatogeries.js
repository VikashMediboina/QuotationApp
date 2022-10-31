import React, { useEffect, useState } from 'react'
import {
    Row,
    Col
  } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddCatogeries = ({formType,defaultval}) => {
	const [defalutValues,setDefaultValues]=useState({})

const addCategory=(e)=>{
    e.preventDefault()
    console.log(e)
}
useEffect(()=>{
    console.log(defaultval)
    setDefaultValues(defaultval)
},[defaultval])
  return (
    <React.Fragment>
       
  
  	<form onSubmit={addCategory}>  
    
      
        <div className="mb-3">
          <label htmlFor="company_code">Enter Category Name</label>
          <input
            type="text"
            defaultValue={defalutValues?.company_code}
            className="form-control"
            id="company_code"
            placeholder="Enter Category Code"
          />
        </div>
     
        <div className="mb-3">
          <label htmlFor="company_name">Enter Category Description</label>
          <input
            type="text"
            defaultValue={defalutValues?.company_name}
            className="form-control"
            id="company_name"
            placeholder="Enter Category Name"
          />
        </div>
        
          <div className="actions clearfix">
                   
                        <div
                          to="#"
                          className="btn btn-primary"
                           
                        >
                          Submit
                          </div> 
                  </div>
     </form>
  
      
      
    </React.Fragment>
  )
}

export default AddCatogeries
