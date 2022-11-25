import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_LINE_ITEMS_URL,UPDATE_LINE_ITEMS_URL,VIEW_CATOGERIES_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'

const AddLineItems = (props) => {
  const {formType,defaultval,onAddButtonClose,login,setAlert,cacheDetails}=props
  const [defalutValues,setDefaultValues]=useState({})
  const [catgories,setCatgories]=useState([])
  const [unit_price,setunit_price]=useState(defalutValues?.unit_price)

  const fetchCatogeries=()=>{
    axios.get(VIEW_CATOGERIES_URL).then((val)=>{
      
          setCatgories(val.data.values)
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
  const addDetails=(e,v)=>{
      e.preventDefault()
     
      if(formType=="Add"){
        var body={
          "line_item_desc":v.line_item_desc,
          "unit_price":Number(v.unit_price),  
          "tax_type":(v.tax_type),
          "room_type":v.room_type,
          "line_item_title":v.line_item_title,
          "inserted_by":login.employee_id
      }
       
        axios.post(ADD_LINE_ITEMS_URL,body).then((val)=>{
          
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
          "line_item_desc":v.line_item_desc,  
          "tax_type":(v.tax_type),
          "unit_price":Number(v.unit_price),
          "room_type":v.room_type,
          "line_item_title":v.line_item_title,
          "updated_by":login.employee_id
      }
        axios.put(UPDATE_LINE_ITEMS_URL+defaultval.line_item_id,body).then((val)=>{
          
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
      fetchCatogeries()
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
                          name="room_type"
                          label="Room Type"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.room_type}
                          className="form-control"
                          placeholder="Enter Catogerie Title"
                          type="select"
                          required
                        >
                          <option value="">Select Room Type</option>
                          {catgories.map((cat)=>
                            <option value={cat.catogerie_title}>
                      {cat.catogerie_title}
                          </option>
                          )}
                        </AvField>
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="line_item_title"
                          label="Line Item Title"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.line_item_title}
                          className="form-control"
                          placeholder="Enter Line Item Title"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="line_item_desc"
                          label="Line Item Descriptiom"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.line_item_desc}
                          className="form-control"
                          placeholder="Enter Line Item Description"
                          type="text"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="unit_price"
                          label="Price"
                          // value="admin@themesbrand.com"
                          value={Number(unit_price)}
                          className="form-control"
                          placeholder="Enter Price"
                          onChange={(e,v)=>{setunit_price(v)}}
                          type="number"
                          required
                        />
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="tax_type"
                          label="Tax Type"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.tax_type}
                          className="form-control"
                          placeholder="Enter Tax Type"
                          type="select"
                          required
                        >
                         <option value="">Select Tax</option>
                          {cacheDetails?.tax_type.map((tax)=>
                          <option value={tax.key}>
                                {tax.key+" "}({tax.value}%)
                          </option>)}
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
      
      
    </React.Fragment>
  )
}
const mapStateToProps = state => {
 
  const { login } = state?.Login
  const { cacheDetails } = state?.genricReducer
    return {login,cacheDetails}
  }
  
  export default connect(mapStateToProps, { setAlert })(AddLineItems)
  
  AddLineItems.propTypes = {
    setAlert: PropTypes.func,
  }
