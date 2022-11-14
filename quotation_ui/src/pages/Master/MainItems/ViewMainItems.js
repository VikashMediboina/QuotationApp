import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import TableCard from "../../../components/InsideComponents/TableCard"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"
import AddMainItems from "./AddMainItems"
import {setAlert} from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import {VIEW_MAIN_ITEMS_URL,DELETE_MAIN_ITEMS_URL} from "../../../Constonts/api"
import axios from "axios"

const ViewMainItems = (props) => {
  const {login}=props
  const [modal, setmodal] = useState(false)
  const [formType, setFormType] = useState("Add");
 const  [defaultval,setDefaultVal]=useState({});
  const [details,setDetails]=useState([])
	    

  const fetchData=()=>{
    axios.get(VIEW_MAIN_ITEMS_URL).then((val)=>{
      
        // props.setAlert({
        //   message:val.data.msg,
        //   type:"SUCCESS"
        // })
        const data = {
          columns: [
            {
              label: "Id",
              field: "main_item_id",
              sort: "asc",
              width: 150,
            },
            {
              label: "Catogerie",
              field: "room_type",
              sort: "asc",
              width: 150,
            },
            {
              label: "Title",
              field: "main_item_title",
              sort: "asc",
              width: 270,
            },
            {
              label: "Description",
              field: "main_item_desc",
              sort: "asc",
              width: 200,
            }, {
              label: "Price",
              field: "unit_price",
              sort: "asc",
              width: 250
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
    axios.post(DELETE_MAIN_ITEMS_URL+row.main_item_id,{}).then((val)=>{
      
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
          <Breadcrumbs title="Pages" breadcrumbItem="View Main Items" />
 
          <TableCard 
          data={details} 
          addButton={login?.access?.main_add?"Add Main Items":""} 
          tittle={'Main Items'} 
          onAddButton={onAddButton}
          editIcon={login?.access?.main_edit?true:false}
          deleteIcon={login?.access?.main_delete?true:false}
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
                   Add Main Items
                    </ModalHeader>
                  <ModalBody>
                   <AddMainItems formType={formType} defaultval={defaultval} onAddButtonClose={onAddButtonClose}/>
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
export default connect(mapStateToProps, { setAlert })(ViewMainItems)


ViewMainItems.propTypes = {
  setAlert: PropTypes.func,
}
