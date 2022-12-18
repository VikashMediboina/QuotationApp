import React, { useEffect, useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Form,
  Input,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap"

import classnames from "classnames"
// import { Link, useParams } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import AddCustomerDetails from "./AddCustomerDetails"
import AddDetails from "./AddDetails"
import ViewQuotationById from "./ViewQuotationById"

const AddQuotation = ({quotation_props,formType,clone_props}) => {
  // let id  = match.params;
  const [activeTab, setactiveTab] = useState(1)
  const [selectedcustGroup, setselectedcustGroup] = useState(null);
  const [selectedempGroup, setselectedempGroup] = useState(null);
  // const [projectAdd, setprojectAdd] = useState("");
  const [details, setDetails] = useState({});
  const [quotation_id, setquotation_id] = useState("");
  const [clone_id, setclone_id] = useState("");
  const [type, settype] = useState("Add");

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }
  useEffect(()=>{
    if(quotation_props){
      setquotation_id(quotation_props)
      setactiveTab(1)
    }
  },[quotation_props,clone_props])
  useEffect(()=>{
    if(clone_props){
      setclone_id(clone_props)
      setactiveTab(1)
    }
  },[clone_props])
  useEffect(()=>{
    if(formType){
      settype(formType)
    }
  },[formType])
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem={quotation_props?"Update/View Quotation":"Add Quotation"} />
          <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <div className="form-wizard-wrapper wizard clearfix">
                  <div className="steps clearfix">
                    <ul>
                      <NavItem
                        className={classnames({ current: activeTab === 1 })}>
                        <NavLink
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <span className="number">1.</span>{" "}
                            Add Customer
                          </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 2 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 2 })}
                        >
                          <span className="number">2.</span>{" "}
                            Add Items
                          </NavLink>
                      </NavItem>
                      <NavItem className={classnames({ current: activeTab === 3 })}>
                        <NavLink
                          className={classnames({ active: activeTab === 3 })}
                        >
                          <span className="number">3.</span>
                          Confirm Detail
                        </NavLink>
                      </NavItem>
                      
                    </ul>
                  </div>
                  <div className="content clearfix">
                    <TabContent
                      activeTab={activeTab}
                      className="body"
                    >
                      <TabPane tabId={1}>
                      <AddCustomerDetails   selectedcustGroup={selectedcustGroup}  setselectedcustGroup={setselectedcustGroup} details={details} setDetails={setDetails}
                      setselectedempGroup={setselectedempGroup} clone_id={clone_id}selectedempGroup={selectedempGroup} changeTab={toggleTab} formType={type} setquotation_id={setquotation_id} quotation_id={quotation_id}/>
                      </TabPane>
                      <TabPane tabId={2}>

                      {quotation_id&& activeTab===2 && <AddDetails    selectedcustGroup={selectedcustGroup}  setselectedcustGroup={setselectedcustGroup} details={details} setDetails={setDetails}
                      setselectedempGroup={setselectedempGroup} clone_id={clone_id} setclone_id={setclone_id} selectedempGroup={selectedempGroup}  setquotation_id={setquotation_id} formType={type} quotation_id={quotation_id} changeTab={toggleTab}/>}
                      </TabPane>
                     
                      <TabPane tabId={3}>
                      {quotation_id && activeTab===3  && activeTab==3 && <ViewQuotationById   quotation_id={quotation_id} />}
                      </TabPane>
                    </TabContent>
                  </div>
                  <div className="actions clearfix">
                    <ul>
                      <li
                        className={
                          activeTab === 1 ? "previous disabled" : "previous"
                        }
                      >
                        {/* <Link
                          to="#"
                          className="btn btn-primary"
                          onClick={() => {
                            toggleTab(activeTab - 1)
                          }}
                        >
                          Previous
                          </Link>
                      </li>
                      <li
                        className={activeTab === 4 ? "next disabled" : "next"}
                      >
                        <Link
                          to="#"
                          className="btn btn-primary"
                          onClick={() => {
                            toggleTab(activeTab + 1)
                          }}
                        >
                          Next
                          </Link> */}
                      </li>
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
         </Row>
      </div>
    </React.Fragment>
  )
}

export default AddQuotation