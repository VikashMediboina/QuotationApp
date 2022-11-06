import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_CATOGERIES_URL,UPDATE_CATOGERIES_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'


const AddCatogeries = (props) => {
const {formType,defaultval,onAddButtonClose,login,setAlert}=props
const [defalutValues,setDefaultValues]=useState({})

const addDetails=(e,v)=>{
    e.preventDefault()
   
    if(formType=="Add"){
      var body={
        "catogerie_title":v.catogerie_title,
        "catogerie_desc":v.catogerie_desc,
        "inserted_by":login.employee_id
    }
     
      axios.post(ADD_CATOGERIES_URL,body).then((val)=>{
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
        "catogerie_title":v.catogerie_title,
        "catogerie_desc":v.catogerie_desc,
        "updated_by":login.employee_id
    }
      axios.put(UPDATE_CATOGERIES_URL+defaultval.catogerie_id,body).then((val)=>{
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
    <React.Fragment>
     <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        addDetails(e, v)
                      }}
                    >
    <Row>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="catogerie_title"
                          label="Catogerie Title"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.catogerie_title}
                          className="form-control"
                          placeholder="Enter Catogerie Title"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="catogerie_desc"
                          label="Catogerie Description"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.catogerie_desc}
                          className="form-control"
                          placeholder="Enter Catogerie Description"
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
      
    </React.Fragment>
  )
}
const mapStateToProps = state => {
 
  const { login } = state?.Login
    return {login}
  }
  
  export default connect(mapStateToProps, { setAlert })(AddCatogeries)
  
  AddCatogeries.propTypes = {
    setAlert: PropTypes.func,
  }
