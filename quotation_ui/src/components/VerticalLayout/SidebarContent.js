import PropTypes from "prop-types"
import React, { useEffect, useRef , useCallback} from "react"

// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"
import { connect } from "react-redux"


const SidebarContent = props => {
  const {login}=props
  const ref = useRef()
  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }
    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement
      if (parent2) {
        parent2.classList.add("mm-show") // ul tag
        const parent3 = parent2.parentElement // li tag
        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }, []);
  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    const pathName = props.location.pathname
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname, activateParentDropdown])
  useEffect(() => {
    ref.current.recalculate()
  }, []);
  const scrollElement = (item) => {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  

  return (
    <React.Fragment>
      <SimpleBar ref={ref} className="vertical-simplebar">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Menu")} </li>
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="mdi mdi-airplay"></i><span className="badge rounded-pill bg-info float-end">2</span>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

           <li>
              <Link to="/#" className="has-arrow waves-effect">
              <i className="mdi mdi-newspaper"></i>
                <span>{props.t("Forms")}</span>
              </Link>
              <ul className="sub-menu">
              {login?.access?.q_view&&<li><Link to="/viewQuotation">{props.t("Quotation")}</Link></li>}
                {login?.access?.q_add&&<li><Link to="/addQuotation">{props.t("Add New Quotation")}</Link></li>}
                {login?.access?.c_view&&<li><Link to="/viewCustomer">{props.t("Customers")}</Link></li>}
                <li><Link to="/reports">{props.t("Reports")}</Link></li>
              </ul>
            </li>

            <li>
              <Link to="/#" className="has-arrow waves-effect">
              <i className="mdi mdi-newspaper"></i>
                <span>{props.t("Master")}</span>
              </Link>
              <ul className="sub-menu">
              {login?.access?.main_view&&<li><Link to="/viewMainItems">{props.t("Main Items")}</Link></li>}
                {login?.access?.line_view&&<li><Link to="/viewLineItems">{props.t("Line Items")}</Link></li>}
                {login?.access?.cat_view&&<li><Link to="/viewCatogeries">{props.t("Rooms/Catogeries")}</Link></li>}
                {login?.access?.emp_view&&<li><Link to="/viewEmployee">{props.t("Employees")}</Link></li>}
                {login?.access?.company_view&&<li><Link to="/viewCompany">{props.t("Company")}</Link></li>}
              </ul>
            </li>
            
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

const mapStateToProps = state => {
 
  const { login } = state?.Login

return { login }
}

export default withRouter(withTranslation()(connect(mapStateToProps, {  })(SidebarContent)))