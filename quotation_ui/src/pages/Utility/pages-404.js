import React, { useEffect } from "react"
import { Container, Row, Col, CardBody, Card } from "reactstrap"

//Import Images
import errorImage from "../../assets/images/error-img.png"

const Pages404 = () => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
          <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">

                <CardBody>

                  <div className="text-center p-3">

                    <div className="img">
                      <img src={errorImage} className="img-fluid" alt="" />
                    </div>

                    <h1 className="error-page mt-5"><span>404!</span></h1>
                    <h4 className="mb-4 mt-5">Sorry, page not found</h4>
                  </div>

                </CardBody>
              </Card>

            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Pages404
