import React, { useEffect, useState } from 'react'
import {
    Row,
    Col
  } from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"

const AddLineItems = ({formType,defaultval}) => {
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
          <label htmlFor="lineitem_code">Enter Title</label>
          <input
            type="text"
            defaultValue={defalutValues?.lineitem_title}
            className="form-control"
            id="line_title"
            placeholder="Enter Title"
          />
        </div>
     
        <div className="mb-3">
          <label htmlFor="lineitem_name">Enter Description</label>
          <input
            type="text"
            defaultValue={defalutValues?.lineitem_description}
            className="form-control"
            id="line_description"
            placeholder="Enter Description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lineitem_name">Enter Unit Price</label>
          <input
            type="text"
            defaultValue={defalutValues?.lineitem_price}
            className="form-control"
            id="line_price"
            placeholder="Enter Unit Price"
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

export default AddLineItems
