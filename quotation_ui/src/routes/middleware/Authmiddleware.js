import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const Authmiddleware = ({
  component: Component,
  layout: Layout,
  isAuthProtected,
  login,
  ...rest
}) => {
  const [loginState, setLogin]=useState({})
  useEffect(()=>{
    setLogin(login)
  },[login])
  return(
  <Route
    // {...rest}
    
    render={props => {

      if (isAuthProtected && !loginState) {
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
  location: PropTypes.object,
  layout: PropTypes.any,
}
const mapStateToProps = state => {
const { login } = state?.Login
  return {login}
}

export default connect(mapStateToProps)(Authmiddleware)
