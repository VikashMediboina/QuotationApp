
import React, { createRef, useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { CardBody, Row, Col, Card, Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom"
import { setAlert } from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import {  GET_LINE_ITEMS_QUTOATION_URL, GET_MAIN_ITEMS_QUTOATION_URL, GET_CUSTOMER_QUTOATION_URL } from "../../../Constonts/api"
import axios from "axios"

//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Images
import logoLight from "../../../assets/images/logo-light.png";
import Pages404 from "../../Utility/pages-404";

const ViewPrintQuotationById = (props) => {
    const {   quotation_id, login} = props
    const options = {
        orientation: 'landscape',
        unit: 'in',
        format: [4,2]
    };
  const [details, setDetails] = useState({});
    const [items, setItems] = useState([])
    const [lineItemsQutation,setLineItemsQutation]= useState([])
    const [mainItemsQutation,setMainItemsQutation]= useState([])
    const [totalSum,setTotalSum]=useState(0)
    const [descountSum,setDescountSum]=useState(0)
    const [netSum,setNetSum]=useState(0)
    const ref = createRef();
    const fetchDetails=()=>{
        axios.get(GET_CUSTOMER_QUTOATION_URL+quotation_id).then((val)=>{
            setDetails(val.data.values[0])
    
            }).catch(err=>{
                props.setAlert({
                  message:String(err),
                  type:"ERROR"
                })
            })
        axios.get(GET_MAIN_ITEMS_QUTOATION_URL+quotation_id).then((val)=>{
            
            setMainItemsQutation(val.data.values)
            
          }).catch(err=>{
            props.setAlert({
              message:String(err),
              type:"ERROR"
            })
        })
    
        axios.get(GET_LINE_ITEMS_QUTOATION_URL+quotation_id).then((val)=>{
            
            setLineItemsQutation(val.data.values)
            
          }).catch(err=>{
            props.setAlert({
              message:String(err),
              type:"ERROR"
            })
        })
    }
    useEffect(()=>{
        fetchDetails()
    },[quotation_id])

useEffect(()=>{
    fetchDetails()
},[])
            
    const printOrder = () => {
    //     const printableElements = document.getElementById('printme2');
        
    //     html2canvas(printableElements).then(function(canvas) {
    //         const divImage = canvas.toDataURL("image/png");
    //         const pdf = new jsPDF();
    //        pdf.addImage(divImage, 'PNG', 0, 0);
    //        pdf.save("download.pdf");
    //    })
        const printableElements = document.getElementById('printme2').innerHTML;
        const orderHtml = '<html><head><title></title></head><body><div style="padding:15px;margin:15px;border-style: solid;border-width:2px;border-color:red;">' + printableElements + '</div></body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = orderHtml;
        window.print();
        document.body.innerHTML = oldPage
    }

    useEffect(()=>{
        let line={}
        let sum=0
        let discsum=0
        let netsums=0
        let itemsInside=[]
        for(let i=0;i<lineItemsQutation.length;i++){
        if((line[""+lineItemsQutation[i].quotation_id+lineItemsQutation[i].seq_no]==undefined)){
        line[""+lineItemsQutation[i].quotation_id+lineItemsQutation[i].seq_no]=[lineItemsQutation[i]]
        }
        else{
            line[""+lineItemsQutation[i].quotation_id+lineItemsQutation[i].seq_no].push(lineItemsQutation[i])
        }
        sum+=Number(lineItemsQutation[i]?.tot_price)
        discsum+=Number(lineItemsQutation[i]?.disc_price)
        netsums+=Number(lineItemsQutation[i]?.net_price)
        }
        console.log(line)
        itemsInside=mainItemsQutation.map(item=>(
                {
                    ...item,
                    lineItems:line?.[""+item.quotation_id+item.seq_no]?line?.[""+item.quotation_id+item.seq_no]:[]
                }
            ))
            for(let i=0;i<mainItemsQutation.length;i++){
                
                sum+=Number(mainItemsQutation[i]?.tot_price)
        discsum+=Number(mainItemsQutation[i]?.disc_price)
        netsums+=Number(mainItemsQutation[i]?.net_price)
                }
            setItems(itemsInside)
            setTotalSum(sum)
            setDescountSum(discsum)
            setNetSum(netsums)
            },[mainItemsQutation,lineItemsQutation])
  
 

    return (
        <React.Fragment>
            {/* <div className="page-content"> */}
            
           {details? <div style={{ border: 1, padding: "30px" }}>
                <Row id="printme2" ref={ref} >
                    <Col sm={12} >
<div style={{width:"900px"}}>
<Card>


                            <CardBody>
                                <div className="invoice-title">
               <div className="water-mark">{details?.quot_status}</div>
                                    {/* <h4 className="float-end font-size-16">Order # 12345</h4> */}
                                    <Row>

                                        <div className="col-3">
                                            <div className="mb-4">
                                                <img src={'data:image/png;base64,' +login?.company_logo} className="logo-dark" alt="logo dark" height="40" />
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
                                                    {details?.quotation_code!=null?  <h2>
                                                        Q.No:{details.quotation_code}
                                                    </h2>:""}
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
                                            {details?.customer_name}<br />
                                                {details?.address_1 + ", " + (details?.address_2 ? details?.address_2 + ", " : "") + (details?.address_3 ? (details?.address_3 + ", ") : "")
                                                + details?.city + ", " + details?.state + ", " + details?.country + ", Pin:" + details?.pin_code
                                            }<br></br>
                                            Email: {details?.mail_id}<br></br>
                                            Phone: {details?.mobile_1}
                                        </address>
                                    </div>
                                    <div className="col-6 text-end">
                                        <address>
                                            <strong>Quotation Details:</strong><br />
                                           {details?.quotation_code!=null? <>QUOTE No:{details.quotation_code}<br /></>:""}
                                            QUOTE DATE:{String(details?.quotation_date).substring(0,10)}<br />
                                            CUSTOMER ID: {details?.customer_id}<br />
                                            PREPARED BY: {details?.lead_by_name}
                                        </address>
                                    </div>
                                </Row>
                                <Row>

                                    <div className="col-6">
                                        <div className="py-2 mt-3">
                                            <h3 className="font-size-15 fw-bold">Order summary</h3>
                                        </div>
                                    </div>
                                </Row>
                                <div className="table-responsive">
                                    <Table className="table-nowrap">
                                        <thead>
                                            <tr>
                                                <th style={{ width: "70px" }}>No.</th>
                                                <th>Room</th>
                                                <th>Description</th>
                                                <th>Area</th>
                                                <th>quantity</th>
                                                <th>Unit Price</th>
                                                {/* <th>Discount Price</th> */}
                                                <th className="text-end">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {items?.map((item, index) => {
                                                return (
                                                    <>
                                                        <tr>
                                                            <td rowSpan={item.lineItems.length + 1}>{index + 1}</td>
                                                            <td rowSpan={item.lineItems.length + 1}>{item?.room_type}</td>
                                                            <td>
                                                                <b>{item?.main_item_title}</b><br></br>
                                                                {item?.main_item_desc}</td>
                                                            <td>{item?.tot_area} Sqft</td>
                                                            <td>{item?.quantity}</td>
                                                            <td>&#8377; {item.unit_price}</td>
                                                            {/* <td>&#8377; {item.disc_price}</td> */}
                                                            <td className="text-end">&#8377; {item?.net_price}</td>
                                                         

                                                        </tr>
                                                        {
                                                            item?.lineItems.map((line, index) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{index + 1}. {line?.line_item_title}</td>
                                                                        <td>{line?.tot_area} Sqft</td>
                                                                        <td>{line?.qty}</td>
                                                                        <td>&#8377; {line.unit_price}</td>
                                                                        {/* <td >&#8377; {line.disc_price}</td> */}
                                                                        <td className="text-end">&#8377; {line.net_price}</td>
                                                                     
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
                                                <td className="text-end">&#8377;{totalSum}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="6" className="border-0 text-end">
                                                    <strong>Discounted Price</strong>
                                                </td>
                                                <td className="border-0 text-end">&#8377; {descountSum}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="6" className="border-0 text-end">
                                                    <strong>Total</strong>
                                                </td>
                                                <td className="border-0 text-end">
                                                    <h4 className="m-0">&#8377;{netSum}</h4>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                 <div className="d-print-none">
                                    <div className="float-end">
                                        <Link to="#"
                                            onClick={printOrder}
                                            className="btn btn-success waves-effect waves-light"><i
                                                className="fa fa-print"></i></Link>{" "}
                                               
                                        {/* <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link> */}
                                    </div>
                                </div> 
                               
          
                                <Row>
     
    </Row>
                            </CardBody>
                        </Card>

    </div>

                    </Col>
                </Row>
            
            </div>
            
            :<Pages404/>}
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    const { cacheDetails } = state?.genricReducer
    const { login } = state?.Login
 
    return {  login,cacheDetails}
}
export default connect(mapStateToProps, { setAlert })(ViewPrintQuotationById)


ViewPrintQuotationById.propTypes = {
    setAlert: PropTypes.func,
}