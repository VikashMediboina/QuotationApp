import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, Modal, ModalHeader, ModalBody } from "reactstrap"

import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableCard from "../../../components/InsideComponents/TableCard"
import { CHANGE_STATUS_ACTIVE_URL, DELETE_QUTOATION_URL, GET_QUTOATION_URL } from "../../../Constonts/api"
import axios from "axios"
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import AddQuotation from "./AddQuotation"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvField from "availity-reactstrap-validation/lib/AvField"

const ViewQuotation = (props) => {
  const {login,cacheDetails}=props
  const [modal, setmodal] = useState(false)
  const [details,setDetails]=useState([])
  const [rowStatus,setRowStatus]=useState([])
const [showAdd,setShowAdd]=useState(false)
const [formType,setFormType]=useState("")
const [id,setId]=useState(false)
const [clone,setclone]=useState(null)
  const fetchData=()=>{
    const body={"company_id":Number(login?.company_id)}
    axios.get(GET_QUTOATION_URL,{params:body}).then((val)=>{
      
        // props.setAlert({
        //   message:val.data.msg,
        //   type:"SUCCESS"
        // })
        const data = {
 
         columns: [
          {
            label: "Quotation Id",
            field: "quotation_id",
            sort: "asc",
            width: 150,
          },
          {
            label: "Customer Name",
            field: "customer_name",
            sort: "asc",
            width: 270,
          },
          {
            label: "City",
            field: "city",
            sort: "asc",
            width: 200,
          },
          {
            label: "Date",
            field: "quotation_date",
            sort: "asc",
            width: 100,
          },
          {
            label: "Lead By",
            field: "lead_by_name",
            sort: "asc",
            width: 150,
          },
          {
            label: "Status",
            field: "quot_status",
            sort: "asc",
            width: 100,
          }
         ],
          rows:val.data.values}
        setDetails(data)
      
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
  useEffect(()=>{
    fetchData()
  },[])
  const onEditButton=(row)=>{
    setId(row.quotation_id)
    setShowAdd(true)
    setFormType("Edit")
  }
  const onCloneButton=(row)=>{
    setclone(row.quotation_id)
    setShowAdd(true)
    setFormType("Clone")
  }
  const onViewButton=(row)=>{
    window.open(window.location.origin+"/qutation/"+row.quotation_id)
  }
  const onUpdateStatus=(row)=>{
    setmodal(true)
    setRowStatus(row)
  }
  const changeStatus=(e,v)=>{
    axios.post(CHANGE_STATUS_ACTIVE_URL+rowStatus.quotation_id,{
        quot_status:v.quot_status,
        "customer_name":rowStatus.customer_name,
        "cust_profile":rowStatus.cust_profile,
        "mail_id":rowStatus.mail_id,
        "address_2":rowStatus?.p_address_2,
        "quotation_date":rowStatus.quotation_date,
        "customer_id":rowStatus.customer_id,
        "lead_by":rowStatus.lead_by,
        "lead_by_name":rowStatus.lead_by_name,
        "shop_manager_id":rowStatus?.shop_manager_id,
        "city":rowStatus.city,
        "country":rowStatus.country,
        "mobile_1":rowStatus.mobile_1,
        "address_3":rowStatus.address_3,
        "state":rowStatus.state,
        "address_1":rowStatus.address_1,
        "pin_code":Number(rowStatus.pin_code),
        company_detail_id:login.company_id,
        "updated_by":login.employee_id,
        comment:v.comment
    }).then((val)=>{
      setmodal(false)

        props.setAlert({
          message:val.data.msg,
          type:"SUCCESS"
        })

    }).catch(err=>{
      props.setAlert({
        message:String(err),
        type:"ERROR"
      })
    })
}
  const onDeleteButton=(row)=>{
    const body={
      "customer_name":row.customer_name,
      "cust_profile":row.cust_profile,
      "mail_id":row.mail_id,
      "address_2":row?.address_2,
      "customer_id":row.customer_id,
      "lead_by":row.lead_by,
      "lead_by_name":row.lead_by_name,
      "shop_manager_id":row?.shop_manager_id,
      "city":row.city,
      "country":row.country,
      "mobile_1":row.mobile_1,
      "address_3":row.address_3,
      "state":row.state,
      "address_1":row.address_1,
      "pin_code":Number(row.pin_code),
      "updated_by":login.employee_id,
      "inserted_by":login.employee_id,
      "quotation_date":row.quotation_date,
      "company_detail_id":login.company_id,
      "quot_status":cacheDetails?.status_code[2]
    }
    axios.post(DELETE_QUTOATION_URL+row.quotation_id,body).then((val)=>{
    
      props.setAlert({
        message:val.data.msg,
        type:"SUCCESS"
      })
    fetchData()
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
  return (
    <React.Fragment>
     {!showAdd? <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="View Quotations" />
			
        <Row>
          <Col className="col-12">
          <TableCard
          data={details} 
          tittle={'Quotations'} 
          editIcon={login?.access?.q_edit?true:false}
          deleteIcon={login?.access?.q_delete?true:false}
          onEditButton={onEditButton}
          onDeleteButton={onDeleteButton}
          onViewButton={onViewButton}
          onCloneButton={onCloneButton}
          onUpdateStatus={onUpdateStatus}
          />
           
          </Col>
        </Row>
      </div>:
      <AddQuotation quotation_props={id} formType={formType} clone_props={clone}/>}
      
      <Modal
                  size="lg"
                  isOpen={modal}
                  toggle={() => {
                    setmodal(!modal)
                  }}
                >
                  <ModalHeader
                    toggle={() => {
                      setmodal(!modal)
                    }}
                    className="h4 mt-0 mb-4"
                  >
                    Update Status
                    </ModalHeader>
                  <ModalBody>
                  {cacheDetails?.status_code_options?.[rowStatus.quot_status]?.length>0?<AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        changeStatus(e, v)
                      }}
                    >

    <Row>
    <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="quot_status"
                          label="Status"
                          // value={defalutValues?.quot_status}
                          className="form-control"
                          placeholder="Status"
                          type="select"
                          // onChange={(e,val)=>{quot_status_change(e,val)}}
                          required
                        >
                          <option value="">
                          </option>
                          {cacheDetails?.status_code_options&& cacheDetails?.status_code_options?.[rowStatus.quot_status]?.map((codes)=>
                            <option value={codes}>
                      {codes}
                          </option>
                          )}
                        </AvField>
          
        </div>
      </Col>
      <Col lg={4}>
        <div className="mb-3">
        <AvField
                          name="comment"
                          label="Comments"
                          // value={selectedcustGroup?.comment}
                          className="form-control"
                          placeholder="Enter Comments"
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
      </AvForm>:<>There is no status to update</>}
                  </ModalBody>
                </Modal>

    </React.Fragment>
  )
}


const mapStateToProps = state => {
  const { cacheDetails } = state?.genricReducer
  const { login } = state?.Login
 
  return {  cacheDetails,login}
}
export default connect(mapStateToProps, { setAlert })(ViewQuotation)


ViewQuotation.propTypes = {
  setAlert: PropTypes.func,
}