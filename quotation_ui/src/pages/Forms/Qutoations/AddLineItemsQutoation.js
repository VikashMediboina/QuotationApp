import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
    Row,
    Col
  } from "reactstrap"
  import {setAlert} from "../../../store/genric/genericAction"
  import {ADD_EMPLOYEE_URL,ADD_LINE_ITEMS_QUTOATION_URL,ADD_MAIN_ITEMS_QUTOATION_URL,UPDATE_EMPLOYEE_URL,UPDATE_LINE_ITEMS_QUTOATION_URL,VIEW_COMPANY_URL} from "../../../Constonts/api"
  import { connect } from "react-redux"
  import axios from "axios"
import AvForm from 'availity-reactstrap-validation/lib/AvForm'
import AvField from 'availity-reactstrap-validation/lib/AvField'


const AddLineItems = (props) => {
  const {formType,defaultval,onAddButtonClose,login,setAlert,cacheDetails,lineItems,catogeries,quotation_id,seq_no}=props
const [defalutValues,setDefaultValues]=useState({})
const [company,setCompany]=useState([])

const [dropDownlineItems,setdropDownlineItems]=useState([])
const [roomType,setRoomType]=useState("")
const [selectedlineItems,setselectedlineItems]=useState({})
const [length,setlength]=useState(defalutValues?.length?defalutValues?.length:1)
const [line_item_depth,setline_item_depth]=useState(defalutValues?.line_item_depth)
const [unit_price,setunit_price]=useState(defalutValues?.unit_price)
const [width,setwidth]=useState(defalutValues?.width?defalutValues?.width:1)
const [depth,setdepth]=useState(defalutValues?.depth?defalutValues?.depth:1)
const [quantity,setquantity]=useState(defalutValues?.quantity?defalutValues?.quantity:1)
const [disc_price,setdisc_price]=useState(defalutValues?.disc_price?defalutValues?.disc_price:0)
const fetch_tax=()=>{
  for(let i=0;i<cacheDetails.tax_type;i++){
    if(cacheDetails.tax_type[i].key==selectedlineItems.tax_type){
      return cacheDetails.tax_type[i].value
    }
  }
}
const fetch_line_items=(id,value)=>{
  
  for(let i=0;i<lineItems.length;i++){
    if(lineItems[i].line_item_id==id){
      return lineItems[i][value]
    }
  }
}
// const fetchCompanyData=()=>{
//   axios.get(VIEW_COMPANY_URL).then((val)=>{
   
//     setCompany(company)
    
//   }).catch(err=>{
//     props.setAlert({
//       message:String(err),
//       type:"ERROR"
//     })
    
//   })
// }

  const addEmployees=(e,v)=>{
    e.preventDefault()
    if(formType=="Add"){
      var body={
        line_item_details:[{
          "seq_no":Number(seq_no),
          "room_type":v.room_type,
          "line_item_id":Number(v.line_item_id),
          "line_item_title":fetch_line_items(v.line_item_id,"line_item_title"),
          "line_item_desc":v.line_item_desc,
          "quantity":v.quantity,
          "unit_price":v.unit_price,
          "tot_price":v.tot_price,
          "disc_price":v.disc_price?v.disc_price:0,
          "net_price":v.net_price,
          "cgst":v.net_price*fetch_tax()*0.5,
          "sgst":v.net_price*fetch_tax()*0.5,
          "igst":0,
          "tax_type":selectedlineItems.tax_type,
          "org_unit_price":0
        }],
        // "quotation_id":v.quotation_id,
        "seq_no":Number(seq_no),
        "inserted_by":login.employee_id
    }
     
      axios.post(ADD_LINE_ITEMS_QUTOATION_URL+quotation_id,body).then((val)=>{
        
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
        "seq_no":Number(seq_no),
        "line_seq_no":Number(defaultval.line_seq_no),
        "room_type":v.room_type,
        "line_item_id":Number(v.line_item_id),
        "line_item_title":fetch_line_items(v.line_item_id,"line_item_title"),
        "line_item_desc":v.line_item_desc,
        "quantity":v.quantity,
        "unit_price":v.unit_price,
        "tot_price":v.tot_price,
        "disc_price":v.disc_price?v.disc_price:0,
        "net_price":v.net_price,
        "cgst":v.net_price*fetch_tax()*0.5,
        "sgst":v.net_price*fetch_tax()*0.5,
        "igst":0,
        "tax_type":selectedlineItems.tax_type,
        "org_unit_price":0,
        "updated_by":login.employee_id
    }
      axios.put(UPDATE_LINE_ITEMS_QUTOATION_URL+quotation_id,body).then((val)=>{
        
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
  
  for(let i=0;i<lineItems.length;i++){
    if(lineItems[i].room_type==v){
      dropDownItems.push(lineItems[i])
    }
  }
  setRoomType(v)
  setdropDownlineItems(dropDownItems)
  setselectedlineItems([])
  setunit_price(1)
}
const onchangeLineItem=(e,v)=>{
  for(let i=0;i<dropDownlineItems.length;i++){
    if(dropDownlineItems[i].line_item_id==v){
      setselectedlineItems(dropDownlineItems[i])
      setunit_price(Number(dropDownlineItems[i].unit_price))

    }
  }
}
useEffect(()=>{
  let dropDownItems=[]
  setDefaultValues(defaultval)
  setquantity(defaultval.quantity?defaultval.quantity:1)
  setdisc_price(defaultval.disc_price?defaultval.disc_price:0)
  for(let i=0;i<lineItems.length;i++){
    if(lineItems[i].room_type==defaultval?.room_type){
      dropDownItems.push(lineItems[i])
    }
  }
  for(let i=0;i<dropDownItems.length;i++){
    if(dropDownItems[i].line_item_id==defaultval?.line_item_id){
      setselectedlineItems(dropDownItems[i])
      setunit_price(Number(dropDownItems[i].unit_price))
    }
  }
  setRoomType(defaultval?.room_type)
  setdropDownlineItems(dropDownItems)
  // fetchCompanyData()
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
     {roomType!=""&&<> {dropDownlineItems.length>0?<>
      <Row>
      <Col lg={3}>
        <div className="mb-3">
        <AvField
                          name="line_item_id"
                          label="Line Items"
                          value={defalutValues?.line_item_id}
                          className="form-control"
                          placeholder="Enter Line Items"
                          type="select"
                          onChange={onchangeLineItem}
                          required
                        >
                          <option value="">Select Line Item</option>
                          {dropDownlineItems.map((item)=>
                          <option value={item.line_item_id}>
                              {item.line_item_title}
                          </option>)}
                        </AvField>
          
        </div>
      </Col>
      <Col lg={3}>
        <div className="mb-3">
        <AvField
                          name="line_item_desc"
                          label="Line Items Desc"
                          value={defaultval?.line_item_desc?defaultval?.line_item_desc:(selectedlineItems?.line_item_desc?selectedlineItems?.line_item_desc:"")}
                          className="form-control"
                          placeholder="Enter Line Items Desc"
                          type="text"
                          disabled={true}
                          required
                        />
          
        </div>
      </Col>
      <Col lg={2}>
        <div className="mb-3">
        <AvField
                          name="unit_price"
                          label="Line Unit Price"
                          value={unit_price}
                          className="form-control"
                          placeholder="Enter Unit Price"
                          type="text"
                          disabled={true}
                          required
                        />
          
        </div>
      </Col>
      {/* </Row>
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
      </Col> */}
     
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
                          value={quantity*unit_price}
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
                          value={(quantity*unit_price)-disc_price}
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
      No Line Items Found for the given Room Type
      </Col>
      </Row>}</>} 
   
    <Row>
      <Col lg={12}>
        <div className="text-right float-end">
          <button type="submit" className="btn btn-primary" disabled={dropDownlineItems.length<=0 || (length*width*quantity*depth*unit_price/(line_item_depth))<=0}>
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
