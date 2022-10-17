import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Error from "./Components/Error/Error";
import AddCustomer from "./Components/Forms/Customer/AddCustomer";
import ViewCustomer from "./Components/Forms/Customer/ViewCustomer";
import AddQuotation from "./Components/Forms/Qutoations/AddQuotation";
import ViewQuotation from "./Components/Forms/Qutoations/ViewQuotation";
import Reports from "./Components/Forms/Reports/Reports";
import Login from "./Components/Login/Login";
import AddEmployee from "./Components/Master/Employees/AddEmployee";
import ViewEmployee from "./Components/Master/Employees/ViewEmployee";
import AddItems from "./Components/Master/Items/AddItems";
import ViewItems from "./Components/Master/Items/ViewItems";
import AddLineItems from "./Components/Master/LineItems/AddLineItems";
import ViewLineItems from "./Components/Master/LineItems/ViewLineItems";
import AddMainItems from "./Components/Master/MainItems/AddMainItems";
import ViewMainItems from "./Components/Master/MainItems/ViewMainItems";


export default function QUotationRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
          <Route path="login" element={<Login />} />
          <Route path="customers/add" element={<AddCustomer />} />
          <Route path="customers" element={<ViewCustomer />} />
          <Route path="quotation/add" element={<AddQuotation />} />
          <Route path="quotation" element={<ViewQuotation />} />
          <Route path="reports" element={<Reports />} />
          <Route path="employees/add" element={<AddEmployee />} />
          <Route path="employees" element={<ViewEmployee />} />
          <Route path="items/add" element={<AddItems />} />
          <Route path="items" element={<ViewItems />} />
          <Route path="lineItems/add" element={<AddLineItems />} />
          <Route path="lineItems" element={<ViewLineItems />} />
          <Route path="mainItems/add" element={<AddMainItems />} />
          <Route path="mainItems" element={<ViewMainItems />} />
          <Route path="*" element={<Error />} />
       
      </Routes>
    </BrowserRouter>
  );
}
