
import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import TableCard from "../../../components/InsideComponents/TableCard"

//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import {VIEW_CUSTOMERS_URL,DELETE_CUSTOMERS_URL} from "../../../Constonts/api"
import axios from "axios"
import AddCustomer from "./AddCustomer"
const ViewCustomer = (props) => {
  const {login}=props
	 const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Position",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Office",
        field: "office",
        sort: "asc",
        width: 200,
      },
      {
        label: "Age",
        field: "age",
        sort: "asc",
        width: 100,
      },
      {
        label: "Start date",
        field: "date",
        sort: "asc",
        width: 150,
      },
      {
        label: "Salary",
        field: "salary",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "Tiger Nixon",
        position: "System Architect",
        office: "Edinburgh",
        age: "61",
        date: "2011/04/25",
        salary: "$320",
      },
      {
        name: "Garrett Winters",
        position: "Accountant",
        office: "Tokyo",
        age: "63",
        date: "2011/07/25",
        salary: "$170",
      },
      {
        name: "Ashton Cox",
        position: "Junior Technical Author",
        office: "San Francisco",
        age: "66",
        date: "2009/01/12",
        salary: "$86",
      }, 

    ],
  }
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add")
 const  [defaultval,setDefaultVal]=useState({})
 const [details,setDetails]=useState([])
	    

 const fetchData=()=>{
   axios.get(VIEW_CUSTOMERS_URL).then((val)=>{
       // props.setAlert({
       //   message:val.data.msg,
       //   type:"SUCCESS"
       // })
       const data = {

        columns: [
          {
            label: "Full name",
            field: "customer_name",
            sort: "asc",
            width: 150,
          }, {
            label: "Customer Profile",
            field: "cust_profile",
            sort: "asc",
            width: 270,
          },
          {
            label: "Email",
            field: "customer_email",
            sort: "asc",
            width: 270,
          },
          {
            label: "Customer Phone Number",
            field: "customer_phone_number",
            sort: "asc",
            width: 200,
          },
          {
            label: "Customer Alternate Phone Number",
            field: "customer_alt_phone_number",
            sort: "asc",
            width: 100,
          },
          {
            label: "Address 1",
            field: "address_1",
            sort: "asc",
            width: 150,
          },
          {
            label: "Address 2",
            field: "address_2",
            sort: "asc",
            width: 100,
          },
          {
            label: "Address 3",
            field: "address_3",
            sort: "asc",
            width: 100,
          },
          ,
          {
            label: "City",
            field: "city",
            sort: "asc",
            width: 150,
          },
          {
            label: "State",
            field: "state",
            sort: "asc",
            width: 100,
          },
          {
            label: "Country",
            field: "country",
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
   const onAddButton=()=>{
     setDefaultVal({})
     setFormType("Add")
     setmodal(!modal)
   }
   const onAddButtonClose=(val)=>{
     setmodal(!modal)
    
     props.setAlert({
       message:val.data.msg,
       type:"SUCCESS"
     })
     fetchData()
 
   }
   const onEditButton=(row)=>{
     setDefaultVal(row)
     setFormType("Edit")
     setmodal(!modal)
   }
 
 
 const onDeleteButton=(row)=>{
   axios.post(DELETE_CUSTOMERS_URL+row.customer_id,{}).then((val)=>{
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
   <div className="page-content">

{/* Render Breadcrumbs */}
<Breadcrumbs title="Pages" breadcrumbItem="View Customers" />

<TableCard
data={details} 
addButton={login?.access?.c_add?"Add Customers":""} 
tittle={'Customers'} 
onAddButton={onAddButton}
editIcon={login?.access?.c_edit?true:false}
deleteIcon={login?.access?.c_delete?true:false}
onEditButton={onEditButton}
onDeleteButton={onDeleteButton}
/>
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
        Customer Form
          </ModalHeader>
        <ModalBody>
         <AddCustomer formType={formType} defaultval={defaultval} onAddButtonClose={onAddButtonClose} employees={details.rows}/>
        </ModalBody>
      </Modal>
</div>
    </React.Fragment>
  )
}


const mapStateToProps = state => {
 
    const { login } = state?.Login
 
  return { login }
}
export default connect(mapStateToProps, { setAlert })(ViewCustomer)


ViewCustomer.propTypes = {
  setAlert: PropTypes.func,
}
