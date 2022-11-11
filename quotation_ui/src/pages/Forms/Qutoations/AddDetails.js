
import React, { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { CardBody, Row, Col, Card, Table, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Link } from "react-router-dom"
import { setAlert } from "../../../store/genric/genericAction"
import { connect } from "react-redux"
import { VIEW_EMPLOYEE_URL, DELETE_EMPLOYEE_URL, VIEW_MAIN_ITEMS_URL, VIEW_LINE_ITEMS_URL, VIEW_CATOGERIES_URL, GET_LINE_ITEMS_QUTOATION_URL, GET_MAIN_ITEMS_QUTOATION_URL, DELETE_LINE_QUTOATION_URL, DELETE_MAIN_QUTOATION_URL, CHANGE_STATUS_ACTIVE_URL } from "../../../Constonts/api"
import axios from "axios"
//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Images
import logoLight from "../../../assets/images/logo-light.png";
import AddMainItemsQutoation from "./AddMainItemsQutoation";
import AddLineItemsQutoation from "./AddLineItemsQutoation";

const AddDetails = (props) => {
    const { projectAdd, setprojectAdd, setselectedcustGroup, changeTab, selectedempGroup, setselectedempGroup, confirmDetails,details,quotation_id,login,cacheDetails } = props
    // useEffect(()=>{
    const [items, setItems] = useState([])
    const [modal, setmodal] = useState(false)
    const [formType, setFormType] = useState("Add")
    const [seqNo, setSeqNo] = useState(null)
    const [form, setform] = useState("Main")
    const [defaultMainval, setDefaultMainVal] = useState({})
    const [defaultLineval,setDefaultLineVal]=useState(null)
    const [mainItems,setMainItems]= useState([])
    const [catogeries,setcatogeries]= useState([])
    const [lineItems,setLineItems]= useState([])
    const [lineItemsQutation,setLineItemsQutation]= useState([])
    const [mainItemsQutation,setMainItemsQutation]= useState([])
    const [totalSum,setTotalSum]=useState(0)
    const [descountSum,setDescountSum]=useState(0)
    const [netSum,setNetSum]=useState(0)
    // },[projectAdd,selectedcustGroup])
    useEffect(()=>{
        axios.get(VIEW_CATOGERIES_URL).then((val)=>{
            
            setcatogeries(val.data.values)
            
          }).catch(err=>{
            props.setAlert({
              message:String(err),
              type:"ERROR"
            })
        })
        axios.get(VIEW_MAIN_ITEMS_URL).then((val)=>{
            
                setMainItems(val.data.values)
            
          }).catch(err=>{
            props.setAlert({
              message:String(err),
              type:"ERROR"
            })
        })
        axios.get(VIEW_LINE_ITEMS_URL).then((val)=>{
            
            setLineItems(val.data.values)
            
          }).catch(err=>{
            props.setAlert({
              message:String(err),
              type:"ERROR"
            })
        })


        fetchDetails()

    },[])
    const fetchDetails=()=>{
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
},[confirmDetails])
            
    const printOrder = () => {
        const printableElements = document.getElementById('printme').innerHTML;
        const orderHtml = '<html><head><title></title></head><body><div style="padding:15px;margin:15px;border-style: solid;border-width:2px;border-color:red;">' + printableElements + '</div></body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = orderHtml;
        window.print();
        document.body.innerHTML = oldPage
    }
    const itemas = [
        {
            name: "Kitchen Room",
            type: "MainItem",
            main_item_name: "Main Item",
            main_item_desc: "Description",
            tot_area: 12,
            quantity: 1,
            unit_price: 2000,
            totalAmount: 12 * 2000,
            lineItems: [
                {
                    type: "LineItem",
                    line_item_name: "Line Item",
                    line_item_desc: "Description1",
                    quantity: 2,
                    tot_area: 2000,
                    unit_price: 2000,

                },
                {
                    type: "LineItem",
                    line_item_name: "Line Item",
                    line_item_desc: "Description1",
                    tot_area: 2000,
                    quantity: 2,
                    unit_price: 2000,
                }
            ]
        }
    ]


    const onModalClose = (val) => {
        setmodal(!modal)

        props.setAlert({
            message: val.data.msg,
            type: "SUCCESS"
        })
        fetchDetails()

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
                
                sum+=Number(lineItemsQutation[i]?.tot_price)
        discsum+=Number(lineItemsQutation[i]?.disc_price)
        netsums+=Number(lineItemsQutation[i]?.net_price)
                }
            setItems(itemsInside)
            setTotalSum(sum)
            setDescountSum(discsum)
            setNetSum(netsums)
            },[mainItemsQutation,lineItemsQutation])
    const addMainItems = () => {
        setDefaultMainVal({})
        setFormType("Add")
        setform("Main")
        setmodal(!modal)
    }
    const addLineItems = (row) => {
        setmodal(true)
        setform("Line")
        setSeqNo(row.seq_no)

    }
    const onEditMainButton = (row) => {
        setDefaultMainVal(row)
        setFormType("Edit")
        setSeqNo(row.seq_no)
        setform("Main")
        setmodal(!modal)

    }
    const onEditLineButton= (row) => {
        setDefaultLineVal(row)
        setFormType("Edit")
        setSeqNo(row.seq_no)
        setform("Line")
        setmodal(!modal)

    }
    const onDeleteMainButton = (row) => {
        axios.post(DELETE_MAIN_QUTOATION_URL+row.quotation_id,{
            seq_no:row.seq_no
        }).then((val)=>{
    
            props.setAlert({
              message:val.data.msg,
              type:"SUCCESS"
            })
            fetchDetails()
        }).catch(err=>{
          props.setAlert({
            message:String(err),
            type:"ERROR"
          })
        })
    }
    const confirmAndPrint=()=>{
        axios.post(CHANGE_STATUS_ACTIVE_URL+quotation_id,{
            quot_status:cacheDetails.status_code[1],
            "updated_by":login.employee_id
        }).then((val)=>{
    
            props.setAlert({
              message:val.data.msg,
              type:"SUCCESS"
            })
            changeTab(3)
        }).catch(err=>{
          props.setAlert({
            message:String(err),
            type:"ERROR"
          })
        })
    }
    const onDeleteLineButton = (row) => {
        axios.post(DELETE_LINE_QUTOATION_URL+row.quotation_id,{
            seq_no:row.seq_no,
            line_seq_no:row.line_seq_no
        }).then((val)=>{
    
            props.setAlert({
              message:val.data.msg,
              type:"SUCCESS"
            })
            fetchDetails()
        }).catch(err=>{
          props.setAlert({
            message:String(err),
            type:"ERROR"
          })
        })
    }
    return (
        <React.Fragment>
            {/* <div className="page-content"> */}
            <div style={{ border: 1, padding: "30px" }}>
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
                                            {details?.customer_name}<br />
                                            {projectAdd ? projectAdd :
                                                details?.address_1 + ", " + (details?.address_2 ? details?.address_2 + ", " : "") + (details?.address_3 ? (details?.address_3 + ", ") : "")
                                                + details?.city + ", " + details?.state + ", " + details?.country + ", Pin:" + details?.pin_code
                                            }<br></br>
                                            Email: {details?.customer_email}<br></br>
                                            Phone: {details?.customer_phone_number}
                                        </address>
                                    </div>
                                    <div className="col-6 text-end">
                                        <address>
                                            <strong>Quotation Details:</strong><br />
                                            QUOTE No:0001588<br />
                                            QUOTE DATE:{String(details.quotation_date).substring(0,9)}<br />
                                            CUSTOMER ID: {details.customer_id}<br />
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
                                    {!confirmDetails && <div className="col-6 text-end">

                                        <Button
                                            type="button"
                                            outline
                                            color="primary"
                                            onClick={addMainItems}
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
                                                <th>quantity</th>
                                                <th>Unit Price</th>
                                                {/* <th>Discount Price</th> */}
                                                <th className="text-end">Price</th>
                                                {!confirmDetails&&   <th className="text-end" hidden={confirmDetails}>Action</th>}
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {items.map((item, index) => {
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
                                                           {!confirmDetails&& <td className="text-end" hidden={confirmDetails}>
                                                                <button className="btn " onClick={() => onEditMainButton(item)}>
                                                                    <i className="bx bx-edit-alt font-size-20 align-middle text-primary"></i>{" "}
                                                                </button>{" "}
                                                                <button className="btn " onClick={() => onDeleteMainButton(item)}>
                                                                    <i className="bx bx-trash-alt font-size-20 align-middle me-2 text-primary"></i>{" "}
                                                                </button>{" "}

                                                                <Button
                                                                    type="button"
                                                                    outline
                                                                    color="primary"
                                                                    onClick={()=>{addLineItems(item)}}
                                                                    className="float-end btn btn-rounded waves-effect waves-light"
                                                                >
                                                                    <i className="bx bx-plus font-size-20 align-middle me-2"></i>{" "}
                                                                    Line
                                                                </Button>
                                                            </td>}

                                                        </tr>
                                                        {
                                                            item.lineItems.map((line, index) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{index + 1}. {line?.line_item_title}</td>
                                                                        <td>{line?.tot_area} Sqft</td>
                                                                        <td>{line?.qty}</td>
                                                                        <td>&#8377; {line.unit_price}</td>
                                                                        {/* <td >&#8377; {line.disc_price}</td> */}
                                                                        <td className="text-end">&#8377; {line.net_price}</td>
                                                                        {!confirmDetails&& <td className="text-end" hidden={confirmDetails}>
                                                                            <button className="btn " onClick={() => onEditLineButton(line)}>
                                                                                <i className="bx bx-edit-alt font-size-20 align-middle text-primary"></i>{" "}
                                                                            </button>{" "}
                                                                            <button className="btn " onClick={() => onDeleteLineButton(line)}>
                                                                                <i className="bx bx-trash-alt font-size-20 align-middle me-2 text-primary"></i>{" "}
                                                                            </button>
                                                                        </td>}
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
                                {confirmDetails ? <div className="d-print-none">
                                    <div className="float-end">
                                        <Link to="#"
                                            onClick={printOrder}
                                            className="btn btn-success waves-effect waves-light"><i
                                                className="fa fa-print"></i></Link>{" "}
                                        <Link to="#" className="btn btn-primary w-md waves-effect waves-light">Send</Link>
                                    </div>
                                </div> : 
                                
                                <div className="d-print-none">
                                    <div className="float-end">
                                        <Link to="#"
                                            onClick={()=>{changeTab(confirmDetails?2:1)}}
                                            className="btn btn-primary w-md waves-effect waves-light">Previous</Link>{" "}
                                        <Link to="#" className="btn btn-primary w-md waves-effect waves-light" onClick={confirmAndPrint}>Confirm and Print</Link>
                                    </div>
                                </div>
                                
                                
          }
                                <Row>
     
    </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Modal
                    size="xl"
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
                        Employee
                    </ModalHeader>
                    <ModalBody>
                        {form=="Main" ? <AddMainItemsQutoation formType={formType} defaultval={defaultMainval} onAddButtonClose={onModalClose} quotation_id={quotation_id} mainItems={mainItems} catogeries={catogeries}/> : 
                        <AddLineItemsQutoation formType={formType} defaultval={defaultLineval} onAddButtonClose={onModalClose} quotation_id={quotation_id} lineItems={lineItems} catogeries={catogeries} seq_no={seqNo}/>}
                    </ModalBody>
                </Modal>
            </div>
            {/* </div> */}
        </React.Fragment>
    );
}
const mapStateToProps = state => {
    const { cacheDetails } = state?.genricReducer
    const { login } = state?.Login
 
    return {  login,cacheDetails}
}
export default connect(mapStateToProps, { setAlert })(AddDetails)


AddDetails.propTypes = {
    setAlert: PropTypes.func,
}