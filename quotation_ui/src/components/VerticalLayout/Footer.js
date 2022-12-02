import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          <Row>
            <Col sm={6}>V 1.3(Bug Fixes and New Requirments) - {new Date().getFullYear()} © Rochana Industries Pvt. Ltd.</Col>
            <Col sm={6}>
              <div className="text-sm-end d-none d-sm-block">
              <i className="mdi mdi-heart text-danger"></i>  
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
