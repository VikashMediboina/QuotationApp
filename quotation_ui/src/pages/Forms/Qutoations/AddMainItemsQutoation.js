import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_EMPLOYEE_URL,ADD_MAIN_ITEMS_QUTOATION_URL,UPDATE_EMPLOYEE_URL,UPDATE_MAIN_ITEMS_QUTOATION_URL,VIEW_COMPANY_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'


const AddMainItemsQutoation = (props) => {
  const {formType,defaultval,onAddButtonClose,login,setAlert,cacheDetails,mainItems,catogeries,quotation_id}=props
const [defalutValues,setDefaultValues]=useState({})
const [company,setCompany]=useState([])

const [dropDownMainItems,setdropDownMainItems]=useState([])
const [roomType,setRoomType]=useState("")
const [selectedMainItems,setselectedMainItems]=useState({})
const [length,setlength]=useState(defalutValues?.length?defalutValues?.length:1)
const [main_item_depth,setmain_item_depth]=useState(defalutValues?.main_item_depth)
const [unit_price,setunit_price]=useState(defalutValues?.unit_price)
const [width,setwidth]=useState(defalutValues?.width?defalutValues?.width:1)
const [depth,setdepth]=useState(defalutValues?.depth?defalutValues?.depth:1)
const [quantity,setquantity]=useState(defalutValues?.quantity?defalutValues?.quantity:1)
const [disc_price,setdisc_price]=useState(defalutValues?.disc_price?defalutValues?.disc_price:0)
const fetch_tax=()=>{
  for(let i=0;i<cacheDetails.tax_type;i++){
    if(cacheDetails.tax_type[i].key==selectedMainItems.tax_type){
      return cacheDetails.tax_type[i].value
    }
  }
}
const fetch_main_items=(id,value)=>{
  
  for(let i=0;i<mainItems.length;i++){
    if(mainItems[i].main_item_id==id){
      return mainItems[i][value]
    }
  }
}
const fetchCompanyData=()=>{
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

  const addEmployees=(e,v)=>{
    e.preventDefault()
    if(formType=="Add"){
      var body={
        main_item_details:[{
          "room_type":v.room_type,
          "main_item_id":Number(v.main_item_id),
          "main_item_title":fetch_main_items(v.main_item_id,"main_item_title"),
          "main_item_desc":v.main_item_desc,
          "length":v.length,
          "height":v.height,
          "depth":Number(v.depth),
          "tot_area":v.tot_area,
          "quantity":v.quantity,
          "unit_price":v.unit_price,
          "tot_price":v.tot_price,
          "disc_price":v.disc_price?v.disc_price:0,
          "net_price":v.net_price,
          "cgst":v.net_price*fetch_tax()*0.5,
          "sgst":v.net_price*fetch_tax()*0.5,
          "igst":0,
          "tax_type":selectedMainItems.tax_type,
          "main_item_depth":Number(selectedMainItems.main_item_depth),
          "org_unit_price":0
        }],
        // "quotation_id":v.quotation_id,
        
        "inserted_by":login.employee_id
    }
     
      axios.post(ADD_MAIN_ITEMS_QUTOATION_URL+quotation_id,body).then((val)=>{
        
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
        "seq_no":defaultval.seq_no,
        "room_type":v.room_type,
        "main_item_id":Number(v.main_item_id),
        "main_item_title":fetch_main_items(v.main_item_id,"main_item_title"),
        "main_item_desc":v.main_item_desc,
        "length":v.length,
        "height":v.height,
        "depth":Number(v.depth),
        "tot_area":v.tot_area,
        "quantity":v.quantity,
        "unit_price":v.unit_price,
        "tot_price":v.tot_price,
        "disc_price":v.disc_price?v.disc_price:0,
        "net_price":v.net_price,
        "cgst":v.net_price*fetch_tax()*0.5,
        "sgst":v.net_price*fetch_tax()*0.5,
        "igst":0,
        "tax_type":selectedMainItems.tax_type,
        "main_item_depth":Number(selectedMainItems.main_item_depth),
        "org_unit_price":0,
        "updated_by":login.employee_id
    }
      axios.put(UPDATE_MAIN_ITEMS_QUTOATION_URL+quotation_id,body).then((val)=>{
        
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


const onchangeRoomType=(e,v)=>{
  let dropDownItems=[]
  
  for(let i=0;i<mainItems.length;i++){
    if(mainItems[i].room_type==v){
      dropDownItems.push(mainItems[i])
    }
  }
  setRoomType(v)
  setdropDownMainItems(dropDownItems)
  setselectedMainItems([])
  setunit_price(1)
}
const onchangeMainItem=(e,v)=>{
  for(let i=0;i<dropDownMainItems.length;i++){
    if(dropDownMainItems[i].main_item_id==v){
      setselectedMainItems(dropDownMainItems[i])
      setunit_price(Number(dropDownMainItems[i].unit_price))
      setmain_item_depth(Number(dropDownMainItems[i].main_item_depth))

      setdepth(dropDownMainItems[i].main_item_depth)
    }
  }
}
useEffect(()=>{
  let dropDownItems=[]
  setDefaultValues(defaultval)
  for(let i=0;i<mainItems.length;i++){
    if(mainItems[i].room_type==defaultval.room_type){
      dropDownItems.push(mainItems[i])
    }
  }
  for(let i=0;i<dropDownItems.length;i++){
    if(dropDownItems[i].main_item_id==defaultval.main_item_id){
      setselectedMainItems(dropDownItems[i])
      setunit_price(Number(dropDownItems[i].unit_price))
      setmain_item_depth(Number(dropDownItems[i].main_item_depth))

      setdepth(dropDownItems[i].main_item_depth)
    }
  }
  setRoomType(defaultval.room_type)
  setdropDownMainItems(dropDownItems)
  fetchCompanyData()
},[defaultval])
  return (
    <React.Fragment>

          {/* Render Breadcrumbs */}
          {/* <Breadcrumbs title="Pages" breadcrumbItem="Add Employee" /> */}

          <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        addEmployees(e, v)
                      }}
                    >
    <Row>
      <Col lg={3}>
        <div className="mb-3">
        <AvField
                          name="room_type"
                          label="Room Type"
                          value={defalutValues?.room_type}
                          className="form-control"
                          placeholder="Enter Room Type"
                          type="select"
                          onChange={onchangeRoomType}
                          disabled={formType!="Add"}
                          required
                        >
                          <option value="">Select Room Type</option>
                          {catogeries.map((room)=>
                          <option value={room.catogerie_title}>
                              {room.catogerie_title}
                          </option>)}
                        </AvField>
          
        </div>
      </Col>
      </Row>
      <hr></hr>
     {roomType!=""&&<> {dropDownMainItems.length>0?<>
      <Row>
      <Col lg={3}>
        <div className="mb-3">
        <AvField
                          name="main_item_id"
                          label="Main Items"
                          value={defalutValues?.main_item_id}
                          className="form-control"
                          placeholder="Enter Main Items"
                          type="select"
                          disabled={formType!="Add"}
                          onChange={onchangeMainItem}
                          required
                        >
                          <option value="">Select Main Item</option>
                          {dropDownMainItems.map((item)=>
                          <option value={item.main_item_id}>
                              {item.main_item_title}
                          </option>)}
                        </AvField>
          
        </div>
      </Col>
      <Col lg={3}>
        <div className="mb-3">
        <AvField
                          name="main_item_desc"
                          label="Main Items Desc"
                          value={defaultval?.main_item_desc?defaultval?.main_item_desc:(selectedMainItems?.main_item_desc?selectedMainItems?.main_item_desc:"")}
                          className="form-control"
                          placeholder="Enter Main Items Desc"
                          type="text"
                          disabled={true}
                          required
                        />
          
        </div>
      </Col>
      <Col lg={3}>
        <div className="mb-3">
        <AvField
                          name="unit_price"
                          label="Main Unit Price"
                          value={unit_price}
                          className="form-control"
                          placeholder="Enter Unit Price"
                          type="text"
                          disabled={true}
                          required
                        />
          
        </div>
      </Col>
      </Row>
      <hr></hr>
      <Row>
      <Col lg={2}>
        <div className="mb-3">
        <div class="right-inner-addon">
        <AvField
                          name="length"
                          label="Length in ft"
                          value={length}
                          className="form-control"
                          placeholder="Enter Length"
                          type="number"
                          required
                          onChange={(e,v)=>{
                            setlength(v)
                          }}
                        />
              <span ><b>ft</b></span>
              </div>
        </div>
      </Col>
      <Col lg={2}>
        <div className="mb-3">
        <div class="right-inner-addon">
        <AvField
                          name="width"
                          label="Width in ft"
                          value={width}
                          className="form-control"
                          placeholder="Enter Width"
                          type="number"
                          required
                          onChange={(e,v)=>{setwidth(v)
                          }
                        }
                        />
                        <div style={{borderWidth:"2px solid"}}>
              <span ><b>ft</b></span>
              </div>
        </div>
        </div>
      </Col>
      
    <Col lg={2}>
        <div className="mb-3">
        <div class="right-inner-addon">

        <AvField
                          name="depth"
                          label="Depth"
                          value={depth}
                          className="form-control"
                          placeholder="Enter Depth"
                          type="number"
                          required
                          onChange={(e,v)=>{setdepth(v)}}
                        />
          <span><b>mm</b></span>
        </div>
        </div>
      </Col>
      <Col lg={2}>
        <div className="mb-3">
        <div class="right-inner-addon">

        <AvField
                          name="tot_area"
                          label="Total Area"
                          value={length*width}
                          className="form-control"
                          placeholder="Enter Total Area"
                          type="number"
                          disabled={true}
                          required
                        >
                        </AvField>
                        <span><b>ft<sup>2</sup></b></span>
                        </div>
          
        </div>
      </Col>
     
      <Col lg={2}>
        <div className="mb-3">
        <AvField
                          name="quantity"
                          label="Quantity"
                          value={quantity}
                          className="form-control"
                          placeholder="Enter Quantity"
                          onChange={(e,v)=>{setquantity(v)}}
                          type="number"
                          required
                        />
        </div>
      </Col>
      <Col lg={2}>
        <div className="mb-3">
        <div class="left-inner-addon">
        <AvField
                          name="tot_price"
                          label="Total Price"
                          value={length*width*quantity*depth*unit_price/(main_item_depth)}
                          className="form-control"
                          placeholder="Enter Total Price"
                          type="number"
                          disabled={true}
                          required
                        />
        <span><b>&#8377; </b></span>

                        </div>
          
        </div>
        
      </Col>
     
     
    </Row>
   
    <Row >
  
      <Col lg={2} className='offset-lg-10'>
        <div className="mb-3">
          
        <div class="left-inner-addon">
        <AvField
                          name="disc_price"
                          label="Discount Price"
                          value={disc_price}
                          className="form-control"
                          placeholder="Enter Discount Price"
                          type="number"
                          onChange={(e,v)=>{setdisc_price(v)}}
                        />
             <span><b>&#8377; </b></span>
        </div>
        </div>
   
      </Col>

    </Row>
  
   
    <Row >
  
      <Col lg={2} className='offset-lg-10'>
        <div className="mb-3">
        <div class="left-inner-addon">
        <AvField
                          name="net_price"
                          label="Net Price"
                          value={(length*width*quantity*depth*unit_price/(main_item_depth))-disc_price}
                          className="form-control"
                          placeholder="Enter Net Price"
                          type="number"
                          disabled={true}
                          required
                        />
        <span><b>&#8377; </b></span>
        </div>
        </div>
   
      </Col>

    </Row></>:<Row>
      <Col>
      No Main Items Found for the given Room Type
      </Col>
      </Row>}</>} 
   
    <Row>
      <Col lg={12}>
        <div className="text-right float-end">
          <button type="submit" className="btn btn-primary" disabled={dropDownMainItems.length<=0 || (length*width*quantity*depth*unit_price/(main_item_depth))<=0}>
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
  
  export default connect(mapStateToProps, { setAlert })(AddMainItemsQutoation)
  
  AddMainItemsQutoation.propTypes = {
    setAlert: PropTypes.func,
  }
