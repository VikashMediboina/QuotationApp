import React from "react"
import { Redirect } from "react-router-dom"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

//Pages
import PagesStarter from "../pages/Utility/pages-starter"
import PagesMaintenance from "../pages/Utility/pages-maintenance"
import PagesComingsoon from "../pages/Utility/pages-comingsoon"
import Pages404 from "../pages/Utility/pages-404"
import Pages500 from "../pages/Utility/pages-500"
import PagesInvoice from "../pages/Utility/invoice"
import AddCustomer from "../pages/Forms/Customer/AddCustomer"
import ViewCustomer from "../pages/Forms/Customer/ViewCustomer"
import AddQuotation from "../pages/Forms/Qutoations/AddQuotation"
import ViewQuotation from "../pages/Forms/Qutoations/ViewQuotation"
import Reports from "../pages/Forms/Reports/Reports"
import AddCatogeries from "../pages/Master/Catogeries/AddCatogeries"
import ViewCatogeries from "../pages/Master/Catogeries/ViewCatogeries"
import AddEmployee from "../pages/Master/Employees/AddEmployee"
import ViewEmployee from "../pages/Master/Employees/ViewEmployee"
import AddLineItems from "../pages/Master/LineItems/AddLineItems"
import ViewLineItems from "../pages/Master/LineItems/ViewLineItems"
import ViewMainItems from "../pages/Master/MainItems/ViewMainItems"
import AddMainItems from "../pages/Master/MainItems/AddMainItems"


const userRoutes = [
  { path: "/dashboard", component: Dashboard },



  //Form

  { path: "/addCustomer", component: AddCustomer },
  { path: "/viewCustomer", component: ViewCustomer },
  { path: "/addQuotation", component: AddQuotation },
  { path: "/viewQuotation", component: ViewQuotation },
  { path: "/reports", component: Reports },



  //Master
  { path: "/addCatogeries", component: AddCatogeries },
  { path: "/viewCatogeries", component: ViewCatogeries },
  { path: "/addEmployee", component: AddEmployee },
  { path: "/viewEmployee", component: ViewEmployee },
  { path: "/addLineItems", component: AddLineItems },
  { path: "/viewLineItems", component: ViewLineItems },
  { path: "/viewMainItems", component: ViewMainItems },
  { path: "/addMainItems", component: AddMainItems },

  
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [

  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
  








  { path: "/pages-maintenance", component: PagesMaintenance },
  { path: "/pages-comingsoon", component: PagesComingsoon },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },

 
]

export { userRoutes, authRoutes }