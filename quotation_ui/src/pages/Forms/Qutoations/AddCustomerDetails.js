import React from 'react'

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
  
export default function AddCustomerDetails() {
  return (
    <Form>

    <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtFirstNameBilling"
            className="col-lg-3 col-form-label">Contact Person</label>
          <div className="col-lg-9">
            <Input id="txtFirstNameBilling" name="txtFirstNameBilling"
              type="text" className="form-control" />
          </div>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtLastNameBilling"
            className="col-lg-3 col-form-label">Mobile No.</label>
          <div className="col-lg-9">
            <Input id="txtLastNameBilling" name="txtLastNameBilling"
              type="text" className="form-control" />
          </div>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtCompanyBilling"
            className="col-lg-3 col-form-label">Landline No.</label>
          <div className="col-lg-9">
            <Input id="txtCompanyBilling" name="txtCompanyBilling"
              type="text" className="form-control" />
          </div>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtEmailAddressBilling"
            className="col-lg-3 col-form-label">Email Address</label>
          <div className="col-lg-9">
            <Input id="txtEmailAddressBilling" name="txtEmailAddressBilling"
              type="text" className="form-control" />
          </div>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtAddress1Billing"
            className="col-lg-3 col-form-label">Address 1</label>
          <div className="col-lg-9">
            <textarea id="txtAddress1Billing" name="txtAddress1Billing"
              rows="4" className="form-control"></textarea>
          </div>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtAddress2Billing"
            className="col-lg-3 col-form-label">Warehouse Address</label>
          <div className="col-lg-9">
            <textarea id="txtAddress2Billing" name="txtAddress2Billing"
              rows="4" className="form-control"></textarea>
          </div>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtCityBilling" className="col-lg-3 col-form-label">Company
                                  Type</label>
          <div className="col-lg-9">
            <Input id="txtCityBilling" name="txtCityBilling" type="text"
              className="form-control" />
          </div>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtStateProvinceBilling"
            className="col-lg-3 col-form-label">Live Market A/C</label>
          <div className="col-lg-9">
            <Input id="txtStateProvinceBilling"
              name="txtStateProvinceBilling" type="text"
              className="form-control" />
          </div>
        </Row>
      </Col>
    </Row>

    <Row>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtTelephoneBilling"
            className="col-lg-3 col-form-label">Product Category</label>
          <div className="col-lg-9">
            <Input id="txtTelephoneBilling" name="txtTelephoneBilling"
              type="text" className="form-control" />
          </div>
        </Row>
      </Col>
      <Col md={6}>
        <Row className="mb-3">
          <label htmlFor="txtFaxBilling" className="col-lg-3 col-form-label">Product
                                  Sub Category</label>
          <div className="col-lg-9">
            <Input id="txtFaxBilling" name="txtFaxBilling" type="text"
              className="form-control" />
          </div>
        </Row>
      </Col>
    </Row>
  </Form>
  )
}
