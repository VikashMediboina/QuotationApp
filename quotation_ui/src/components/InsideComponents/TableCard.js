import React, { useEffect, useState } from 'react'

import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle,Button } from "reactstrap"
import { connect } from 'react-redux'

function TableCard(props) {
  const {data,addButton,tittle,onAddButton,editIcon,deleteIcon,onEditButton,onDeleteButton,onViewButton,onCloneButton,cacheDetails,onUpdateStatus}=props
    const [newData,setNewData]=useState({})
    useEffect(()=>{
      let dummy=data
        if(data.rows){
          if(deleteIcon || editIcon){
            dummy.columns.push(
              {
                label: "Action",
                field: "action",
                sort: "asc",
                width: 250
              })
          }
          
          dummy.rows=dummy.rows.map((row) => {
            if(tittle=="Quotations"){
              return {
                ...row,
                'action': (
                  <>
              {<button className="btn " onClick={()=>onEditButton(row)}>
              {/* <> */}
              <i className="bx bx-edit-alt font-size-20 align-middle text-primary"></i>{" "}
              </button>}{" "}
              {( row?.quot_status==cacheDetails?.status_code[0])&&<button  className="btn " onClick={()=>onDeleteButton(row)}>
              <i className="bx bx-trash-alt font-size-20 align-middle me-2 text-primary"></i>{" "}
              </button>}
              {( row?.quot_status!=cacheDetails?.status_code[0])&&<button  className="btn " onClick={()=>onViewButton(row)}>
              <i className="bx bx-window-open font-size-20 align-middle me-2 text-primary"></i>{" "}
              </button>}
              {<button  className="btn " onClick={()=>onCloneButton(row)}>
              <i className="bx bx-copy-alt font-size-20 align-middle me-2 text-primary"></i>{" "}
              </button>}
              {<button className="btn " onClick={()=>onUpdateStatus(row)}>
              {/* <> */}
              <i className="bx bx-right-top-arrow-circle font-size-20 align-middle text-primary"></i>{" "}
              </button>}{" "}
                  </>
                ),
              };
            
            
            }
                return {
                  ...row,
                  'action': (
                    <>
                {(editIcon && !row?.quot_status!=cacheDetails?.status_code[0])&&<button className="btn " onClick={()=>onEditButton(row)}>
                {/* <> */}
                <i className="bx bx-edit-alt font-size-20 align-middle text-primary"></i>{" "}
                </button>}{" "}
                {deleteIcon&&<button  className="btn " onClick={()=>onDeleteButton(row)}>
                <i className="bx bx-trash-alt font-size-20 align-middle me-2 text-primary"></i>{" "}
                </button>}
                    </>
                  ),
                };
              })
              
        }
        setNewData(dummy)
    },[data])
  return (
    
    <Row>
    <Col className="col-12">
      <Card>
        <CardBody>
        <CardTitle> <Row>
    <Col className="col-lg-6 col-12">
            
           {tittle}
          </Col>
   {addButton&& <Col className="col-lg-6 col-12">
           <Button
              type="button"
              outline
              color="primary"
              onClick={onAddButton}
              className="float-end btn btn-rounded waves-effect waves-light"
            >
              <i className="bx bx-plus font-size-20 align-middle me-2"></i>{" "}
                {addButton}
              </Button>
              </Col>}
              </Row>
              </CardTitle>
          <CardSubtitle className="mb-3">
             
            </CardSubtitle>

          <MDBDataTable responsive striped bordered data={newData} />
        </CardBody>
      </Card>
    </Col>
  </Row>
  )
}
const mapStateToProps = state => {
  const { cacheDetails } = state?.genricReducer
  const { login } = state?.Login
 
  return {  cacheDetails,login}
}
export default connect(mapStateToProps,  {})(TableCard)
