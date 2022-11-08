import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Row, Col, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"
import {setAlert} from "../../store/genric/genericAction.js"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import axios from "axios"

// import images
import logo from "../../assets/images/logo-sm-dark.png"
import {FORGET_PASWORD_URL} from "../../Constonts/api"


const ForgetPassword = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
var body={
  "employee_email":values.email,
  "employee_password":values.password
}
    axios.post(FORGET_PASWORD_URL,body).then((val)=>{
      console.log(val.data)
    
        props.setAlert({
          message:val.data.msg,
          type:"SUCCESS"
        })
    }).catch(err=>{
      console.log(err)
      
    })
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card className="overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Reset Password</h5>
                    <Link to="/" className="logo logo-admin mt-4">
                      <img src={logo} alt="" height="30" />
                    </Link>
                  </div>
                </div>
                <div className="card-body pt-5">

                  <div className="p-2">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Password Reset Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError &&
                        props.registrationError ? (
                          <Alert color="danger">
                            {props.registrationError}
                          </Alert>
                        ) : null}

                      <div className="mb-3">
                        <AvField
                          id="email"
                          name="email"
                          label="Email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      
                      <div className="mb-3">
                        <AvField
                          name="password"
                          label="Password"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="mt-4">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Reset Password
                        </button>
                      </div>

                      {/* <div className="mt-4 text-center">
                        <p className="mb-0">
                          By registering you agree to the Qovex{" "}
                          <Link to="#" className="text-primary">
                            Terms of Use
                          </Link>
                        </p>
                      </div> */}
                    </AvForm>

                  </div>
                </div>
              </Card>
              {/* <div className="mt-5 text-center">
                <p>Already have an account ? <a href="/login" className="fw-medium text-primary">
                  Login</a> </p>
                <p>© {new Date().getFullYear()} Qovex. Crafted with <i
                    className="mdi mdi-heart text-danger"></i> by Themesbrand
                        </p>
              </div> */}
            </Col>
          </Row>
          </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPassword.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
  setAlert
})(ForgetPassword)