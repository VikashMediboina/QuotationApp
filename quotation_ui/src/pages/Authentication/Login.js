import PropTypes from 'prop-types'
import React, { useEffect } from "react"

import { Row, Col, Alert, Container } from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// actions
import { loginUser, apiError } from "../../store/actions"
import {setAlert,setCacheDetails} from "../../store/genric/genericAction.js"
// import images
import logo from "../../assets/images/logo-sm-dark.png"
import axios from "axios"
import {LOGIN_URL,CACHE_URL} from "../../Constonts/api"

const Login = (props) => {
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  const getCacheDetails=()=>{
    axios.get(CACHE_URL).then((val)=>{
      if(val.data){
        props.setCacheDetails(val.data, props.history)
        
        // props.setAlert({
        //   message:val.data.msg,
        //   type:"SUCCESS"
        // })
      }else{
        props.setAlert({
          message:val.data.msg,
          type:"ERROR"
        })
      }
    }).catch(err=>{
      if(err?.response){
        console.log(err?.response?.data?.msg)
        props.setAlert({
          message:String(err?.response?.data?.msg),
          type:"ERROR"
        })
      }
      else{
        props.setAlert({
          message:String(err),
          type:"ERROR"
        })
      }
    })
  }
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    var body={
        "employee_email":values.email,
        "employee_password":values.password
    }
    axios.post(LOGIN_URL,body).then((val)=>{
      if(val.data.values){
        props.loginUser(val.data.values, props.history)
        
        props.setAlert({
          message:val.data.msg,
          type:"SUCCESS"
        })
        getCacheDetails()
      }else{
        props.setAlert({
          message:val.data.msg,
          type:"ERROR"
        })
      }
    }).catch(err=>{
      if(err?.response){
        console.log(err?.response?.data?.msg)
        props.setAlert({
          message:String(err?.response?.data?.msg),
          type:"ERROR"
        })
      }
      else{
        props.setAlert({
          message:String(err),
          type:"ERROR"
        })
      }
    })
  }

  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="fas fa-home h2" />
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="card overflow-hidden">
                <div className="bg-login text-center">
                  <div className="bg-login-overlay"></div>
                  <div className="position-relative">
                    <h5 className="text-white font-size-20">Welcome Back !</h5>
                    <p className="text-white-50 mb-0">Sign in to continue to Rochana LTD.</p>
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
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          // value="admin@themesbrand.com"
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
                          // value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      {/* <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div> */}

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                      <div className="mt-4 text-center">
                        <Link to="/forgot-password" className="text-muted"><i
                          className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                      </div>
                    </AvForm>

                  </div>
                </div>
              </div>
              {/* <div className="mt-5 text-center">
                <p>Don't have an account ? <Link to="/register"
                  className="fw-medium text-primary"> Signup now </Link> </p>
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

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps, { loginUser, apiError,setAlert,setCacheDetails })(Login)
)

Login.propTypes = {
  error: PropTypes.any,
  history: PropTypes.object,
  loginUser: PropTypes.func,
  setCacheDetails:PropTypes.func
}