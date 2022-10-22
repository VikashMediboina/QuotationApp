import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components1/Dashboard/Dashboard";
import Error from "./Components1/Error/Error";
import AddCustomer from "./pages/Forms/Customer/AddCustomer";
import ViewCustomer from "./pages/Forms/Customer/ViewCustomer";
import AddQuotation from "./pages/Forms/Qutoations/AddQuotation";
import ViewQuotation from "./pages/Forms/Qutoations/ViewQuotation";
import Reports from "./pages/Forms/Reports/Reports";
import Login from "./Components1/Login/Login";
import AddEmployee from "./pages/Master/Employees/AddEmployee";
import ViewEmployee from "./pages/Master/Employees/ViewEmployee";
import AddItems from "./pages/Master/Catogeries/AddCatogeries";
import ViewItems from "./pages/Master/Catogeries/ViewCatogeries";
import AddLineItems from "./pages/Master/LineItems/AddLineItems";
import ViewLineItems from "./pages/Master/LineItems/ViewLineItems";
import AddMainItems from "./pages/Master/MainItems/AddMainItems";
import ViewMainItems from "./pages/Master/MainItems/ViewMainItems";


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
