import React, { useEffect, useState } from 'react';
import { CardBody, Row, Col, Card, Table, Button } from 'reactstrap';
import { Link } from "react-router-dom"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Images
import logoLight from "../../../assets/images/logo-light.png";

const AddDetails = ({projectAdd,setprojectAdd,setselectedcustGroup,selectedcustGroup,selectedempGroup,setselectedempGroup,confirmDetails}) => {
    
    // useEffect(()=>{
  const [items,setItems]=useState([])


    // },[projectAdd,selectedcustGroup])
    const printOrder = () => {
        const printableElements = document.getElementById('printme').innerHTML;
        const orderHtml = '<html><head><title></title></head><body><div style="padding:15px;margin:15px;border-style: solid;border-width:2px;border-color:red;">' + printableElements + '</div></body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = orderHtml;
        window.print();
        document.body.innerHTML = oldPage
    }
    const itemas=[
        {
            name:"Kitchen Room",
                    type:"MainItem",
                    main_item_name:"Main Item",
                    main_item_desc:"Description",
                    tot_area:12,
                    qty:1,
                    unitPrice:2000,
                    totalAmount:12*2000,
                    lineItems:[
                        {
                            type:"LineItem",
                            line_item_name:"Line Item",
                            line_item_desc:"Description1",
                            qty:2,
                            tot_area:2000,
                            unitPrice:2000,

                        },
                        {
                            type:"LineItem",
                            line_item_name:"Line Item",
                            line_item_desc:"Description1",
                            tot_area:2000,
                            qty:2,
                            unitPrice:2000,
                        }
                    ]
        }
    ]
const addMainItems=()=>{
    
}
    return (
        <React.Fragment>
            {/* <div className="page-content"> */}
            <div style={{border:1,padding:"30px"}}>
                <Row id="printme" >
                    <Col lg={12} >
                        <Card>
                            <CardBody>
                                <div className="invoice-title">
                                    {/* <h4 className="float-end font-size-16">Order # 12345</h4> */}
                                <Row>

                                    <div className="col-3">
                                    <div className="mb-4">
                                        <img src={logoLight} className="logo-dark" alt="logo dark" height="40" />
                                        {/* <img src={logoLight} className="logo-light" alt="logo light" height="20" /> */}
                                    </div>
                                    </div>
                                    <div className="col-4">
                                    <div className="mb-4" >
                                      <b> Rochana Industries Pvt.Ltd., Plotno.23/B, Hardware Park, TSIIC Kanch Imarath,
                                       Ravirala Village, Ranga Reddy District, Telngana, India-501510.</b>
                                    </div>
                                    </div>
                                    <div className="col-5 text-end">
                                    <div className="mb-4">
                                        <b>
                                            Info@rochanaIndustries.com,<br></br>
                                            venu@rochanaIndustries.com<br></br>
                                            +(91) 8567887777, +(91) 8688887777<br></br>
                                            <h2>
                                                Q.No:0001588
                                            </h2>
                                        </b>
                                    </div>
                                    </div>
                                    </Row>
                                </div>
                                <hr />
                                <Row>
                                    <div className="col-6">
                                        <address>
                                            <strong>Shipped To:</strong><br />
                                                {selectedcustGroup?.customer_name}<br />
                                                {projectAdd?projectAdd:
                selectedcustGroup?.address_1+", "+(selectedcustGroup?.address_2?selectedcustGroup?.address_2+", ":"")+(selectedcustGroup?.address_3?(selectedcustGroup?.address_3+", "):"")
                +selectedcustGroup?.city+", "+selectedcustGroup?.state+", "+selectedcustGroup?.country+", Pin:"+selectedcustGroup?.pincode
              }<br></br>
                                                            Email: {selectedcustGroup?.customer_email}<br></br>
                                                            Phone: {selectedcustGroup?.customer_phone_number}
                                        </address>
                                    </div>
                                    <div className="col-6 text-end">
                                        <address>
                                            <strong>Quotation Details:</strong><br />
                                                                QUOTE No:0001588<br />
                                                                    QUOTE DATE:Nov, 1, 2022<br />
                                                                        CUSTOMER ID: 0001257<br />
                                                                           PREPARED BY: {selectedempGroup?.employee_name}
                                        </address>
                                    </div>
                                </Row>
                                <Row>

                                    <div className="col-6">
                                <div className="py-2 mt-3">
                                    <h3 className="font-size-15 fw-bold">Order summary</h3>
                                </div>
                                </div>
                                {!confirmDetails&&<div className="col-6 text-end">

                                    <Button
              type="button"
              outline
              color="primary"
            //   onClick={onAddButton}
              className="float-end btn btn-rounded waves-effect waves-light"
            >
              <i className="bx bx-plus font-size-20 align-middle me-2"></i>{" "}
                Add Main Items
              </Button>
              </div>}
              </Row>
                                <div className="table-responsive">
                                    <Table className="table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "70px" }}>No.</th>
                                                <th>Room</th>
                                                <th>Description</th>
                                                <th>Area</th>
                                                <th>QTY</th>
                                                <th>Unit Price</th>
                                                <th className="text-end">Price</th>
                                                <th className="text-end">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           
                                            {itemas.map((item,index)=>{
                                                return(
                                                    <>
                                                <tr>
                                                <td rowSpan={item.lineItems.length+1}>{index+1}</td>
                                                <td rowSpan={item.lineItems.length+1}>{item?.name}</td>
                                                <td>
                                                    <b>{item?.main_item_name}</b><br></br>
                                                    {item?.main_item_desc}</td>
                                                <td>{item?.tot_area} Sqft</td>
                                                <td>{item?.qty}</td>
                                                <td>Rs.{item.unitPrice}</td>
                                                <td className="text-end">Rs.{item?.tot_area*item?.qty*item?.unitPrice}</td>
                                                <td className="text-end">edit  delete +Line</td>

                                            </tr>
                                            {
                                                item.lineItems.map((line,index)=>{
                                                    return(
                                                    <tr>
                                                <td>{index+1}. {line?.line_item_name}</td>
                                                <td>{line?.tot_area} Sqft</td>
                                                <td>{line?.qty}</td>
                                                <td>Rs.{line.unitPrice}</td>
                                                <td className="text-end">Rs.{line?.tot_area*line?.qty*line?.unitPrice}</td>
                                                <td className="text-end">edit   delete</td>
                                            </tr>)
                                                })
                                            }
                                            </>
                                                )
                                            })}
                                            <tr>

                                            </tr>
                                            <tr>
                                                <td colSpan="6" className="text-end">Sub Total</td>
                                                <td className="text-end">$1397.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="6" className="border-0 text-end">
                                                    <strong>Shipping</strong>
                                                </td>
                                                <td className="border-0 text-end">$13.00</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="6" className="border-0 text-end">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="border-0 text-end">
                                                    <h4 className="m-0">$1410.00</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                {confirmDetails?<div className="d-print-none">
                                    <div className="float-end">
                                        <Link to="#"
                                        onClick={printOrder}
                                            className="btn btn-success waves-effect waves-light"><i
                                                className="fa fa-print"></i></Link>{" "}
                                        <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link>
                                    </div>
                                </div>:""}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                </div>
            {/* </div> */}
        </React.Fragment>
    );
}

export default AddDetails;