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

const AddQuotation = () => {
  const [activeTab, setactiveTab] = useState(1)

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
                      <AddCustomerDetails/>
                      </TabPane>
                      <TabPane tabId={2}>

                        <Form>
                          <Row>
                            <Col md={6}>
                              <Row className="mb-3">
                                <label htmlFor="txtFirstNameShipping"
                                  className="col-lg-3 col-form-label">PAN Card</label>
                                <div className="col-lg-9">
                                  <Input id="txtFirstNameShipping" name="txtFirstNameShipping"
                                    type="text" className="form-control" />
                                </div>
                              </Row>
                            </Col>
                            <Col md={6}>
                              <Row className="mb-3">
                                <label htmlFor="txtLastNameShipping"
                                  className="col-lg-3 col-form-label">VAT/TIN No.</label>
                                <div className="col-lg-9">
                                  <Input id="txtLastNameShipping" name="txtLastNameShipping"
                                    type="text" className="form-control" />
                                </div>
                              </Row>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={6}>
                              <Row className="mb-3">
                                <label htmlFor="txtCompanyShipping" className="col-lg-3 col-form-label">CST
                                                        No.</label>
                                <div className="col-lg-9">
                                  <Input id="txtCompanyShipping" name="txtCompanyShipping"
                                    type="text" className="form-control" />
                                </div>
                              </Row>
                            </Col>
                            <Col md={6}>
                              <Row className="mb-3">
                                <label htmlFor="txtEmailAddressShipping"
                                  className="col-lg-3 col-form-label">Service Tax No.</label>
                                <div className="col-lg-9">
                                  <Input id="txtEmailAddressShipping"
                                    name="txtEmailAddressShipping" type="text"
                                    className="form-control" />
                                </div>
                              </Row>
                            </Col>
                          </Row>

                          <Row>
                            <Col md={6}>
                              <Row className="mb-3">
                                <label htmlFor="txtCityShipping" className="col-lg-3 col-form-label">Company
                                                        UIN</label>
                                <div className="col-lg-9">
                                  <Input id="txtCityShipping" name="txtCityShipping" type="text"
                                    className="form-control" />
                                </div>
                              </Row>
                            </Col>
                            <Col md={6}>
                              <Row className="mb-3">
                                <label htmlFor="txtStateProvinceShipping"
                                  className="col-lg-3 col-form-label">Declaration</label>
                                <div className="col-lg-9">
                                  <Input id="txtStateProvinceShipping"
                                    name="txtStateProvinceShipping" type="text"
                                    className="form-control" />
                                </div>
                              </Row>
                            </Col>
                          </Row>
                        </Form>
                      </TabPane>
                     
                      <TabPane tabId={3}>
                        <div className="row justify-content-center">
                          <Col lg="6">
                            <div className="text-center">
                              <div className="mb-4">
                                <i className="mdi mdi-check-circle-outline text-success display-4" />
                              </div>
                              <div>
                                <h5>Confirm Detail</h5>
                                <p className="text-muted">
                                  If several languages coalesce, the grammar of
                                  the resulting
                                </p>
                              </div>
                            </div>
                          </Col>
                        </div>
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