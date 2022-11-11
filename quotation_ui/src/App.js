import PropTypes from 'prop-types'
import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authRoutes } from "./routes/allRoutes"

// Import all middleware
import Authmiddleware from "./routes/middleware/Authmiddleware"

// layouts Format
import NonAuthLayout from "./components/NonAuthLayout"
import "./App.css"
// Import scss
import "./assets/scss/theme.scss"
import VerticalLayout from './components/VerticalLayout'
import Alerts from './pages/Utility/Alerts'



// Activating fake backend

const App = props => {
  function getLayout() {
    let layoutCls = VerticalLayout
    return layoutCls
  }

  const Layout = getLayout()
  return (
    <React.Fragment>
      <Router>
    <Alerts/>
        <Switch>
        {authRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
            />
          ))}
          
          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={Layout}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}
        </Switch>

      </Router>
    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)