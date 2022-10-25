import React, { useEffect, useState } from 'react'

import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle,Button } from "reactstrap"

function TableCard({data,addButton,tittle,onAddButton,editIcon,deleteIcon,onEditButton}) {
    const [newData,setNewData]=useState({})
    useEffect(()=>{
        if(data.rows){
            data.rows=data.rows.map((row) => {
                return {
                  ...row,
                  'action': (
                    <>
                {editIcon&&<button className="btn " onClick={()=>onEditButton(row)}>
                {/* <> */}
                <i className="bx bx-edit-alt font-size-20 align-middle text-primary"></i>{" "}
                </button>}{" "}
                {deleteIcon&&<button  className="btn ">
                <i className="bx bx-trash-alt font-size-20 align-middle me-2 text-primary"></i>{" "}
                </button>}
                    </>
                  ),
                };
              })
              setNewData(data)
        }
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

export default TableCard