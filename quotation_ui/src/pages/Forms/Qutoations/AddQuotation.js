import React, { useState } from "react"

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
import { Link } from "react-router-dom"
//Import Breadcrumb
import Breadcrumbs from "../../../components/Common/Breadcrumb"
import AddCustomerDetails from "./AddCustomerDetails"
import Invoice from "./invoice"
import AddDetails from "./AddDetails"

const AddQuotation = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [selectedcustGroup, setselectedcustGroup] = useState(null);
  const [selectedempGroup, setselectedempGroup] = useState(null);
  const [projectAdd, setprojectAdd] = useState("");
  const [items,setItems]=useState([])

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }
  return (
    <React.Fragment>
      <div className="page-content">

          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Pages" breadcrumbItem="Add Quotation" />
          <Row>
          <Col lg="12">
            <Card>
              <CardBody>
                <h4 className="card-title">Jquery Steps Wizard</h4>
                <p className="card-title-desc">A powerful jQuery wizard plugin that supports
                                    accessibility and HTML5</p>
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
                      <AddCustomerDetails projectAdd={projectAdd} setprojectAdd={setprojectAdd} selectedcustGroup={selectedcustGroup}  setselectedcustGroup={setselectedcustGroup}
                      setselectedempGroup={setselectedempGroup} selectedempGroup={selectedempGroup} />
                      </TabPane>
                      <TabPane tabId={2}>

                       <AddDetails  projectAdd={projectAdd} setprojectAdd={setprojectAdd} selectedcustGroup={selectedcustGroup}  setselectedcustGroup={setselectedcustGroup}
                      setselectedempGroup={setselectedempGroup} selectedempGroup={selectedempGroup}  />
                      </TabPane>
                     
                      <TabPane tabId={3}>
                      <AddDetails projectAdd={projectAdd} setprojectAdd={setprojectAdd} selectedcustGroup={selectedcustGroup}  setselectedcustGroup={setselectedcustGroup}
                      setselectedempGroup={setselectedempGroup} selectedempGroup={selectedempGroup} confirmDetails={activeTab===3}/>
                      {/* <Invoice/> */}
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
                        <Link
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
                          </Link>
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