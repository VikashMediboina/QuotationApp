import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { loginUser } from "../../store/actions"

const Authmiddleware = props => {
  const {
    component: Component,
    layout: Layout,
    isAuthProtected,
    login,
    loginUser,
    ...rest
  }=props
  const [loginState, setLogin]=useState({})
  useEffect(()=>{
    // if(JSON.parse(sessionStorage.getItem("authUser"))!=login){
    // console.log(login,JSON.parse(sessionStorage.getItem("authUser")))
    //   loginUser(JSON.parse(sessionStorage.getItem("authUser")), props.history)
    // }
    console.log(login,JSON.parse(sessionStorage.getItem("authUser")))
    setLogin(login)
  },[login])
  useEffect(()=>{
    if(sessionStorage.getItem("authUser")){
      loginUser(JSON.parse(sessionStorage.getItem("authUser")), props.history)
    }
  },[])
  return(
  <Route
    // {...rest}
    
    render={props => {


      {console.log(loginState,isAuthProtected)}
      if (isAuthProtected && !login) {
        return (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }

      return (
        
        <Layout>
          <Component {...props} />
        </Layout>
      )
    }}
  />
)}

Authmiddleware.propTypes = {
  isAuthProtected: PropTypes.bool,
  component: PropTypes.any,
  loginUser: PropTypes.func,
  location: PropTypes.object,
  layout: PropTypes.any,
}
const mapStateToProps = state => {
const { login } = state?.Login
  return {login}
}

export default connect(mapStateToProps, { loginUser })(Authmiddleware)
