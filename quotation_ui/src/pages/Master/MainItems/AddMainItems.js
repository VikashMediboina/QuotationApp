import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_MAIN_ITEMS_URL,UPDATE_MAIN_ITEMS_URL,VIEW_CATOGERIES_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'

const AddMainItems = (props) => {
  const {formType,defaultval,onAddButtonClose,login,setAlert}=props
	const [defalutValues,setDefaultValues]=useState({})
  const [catgories,setCatgories]=useState([])
  const fetchCatogeries=()=>{
    axios.get(VIEW_CATOGERIES_URL).then((val)=>{
      console.log(val)
          setCatgories(val.data.values)
    }).catch(err=>{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
      
    })
  }
  const addDetails=(e,v)=>{
      e.preventDefault()
     
      if(formType=="Add"){
        var body={
          "main_item_desc":v.main_item_desc,
          "unit_price":Number(v.unit_price),
          "room_type":v.room_type,
          "main_item_title":v.main_item_title,
          "inserted_by":login.employee_id
      }
       
        axios.post(ADD_MAIN_ITEMS_URL,body).then((val)=>{
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
          "main_item_desc":v.main_item_desc,
          "unit_price":Number(v.unit_price),
          "room_type":v.room_type,
          "main_item_title":v.main_item_title,
          "updated_by":login.employee_id
      }
        axios.put(UPDATE_MAIN_ITEMS_URL+defaultval.main_item_id,body).then((val)=>{
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
                          name="main_item_title"
                          label="Line Item Title"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.main_item_title}
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
                          name="main_item_desc"
                          label="Line Item Descriptiom"
                          // value="admin@themesbrand.com"
                          value={defalutValues?.main_item_desc}
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
                          value={Number(defalutValues?.unit_price)}
                          className="form-control"
                          placeholder="Enter Price"
                          type="number"
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
  
  export default connect(mapStateToProps, { setAlert })(AddMainItems)
  
  AddMainItems.propTypes = {
    setAlert: PropTypes.func,
  }

