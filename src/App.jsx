import { useState } from 'react'
import Sidebar from "./components/Layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from './pages/Dashboard';
import Login from './pages/authentication/Login';
import AddProduct from './pages/Product/AddProduct';
import Category from './pages/Category/Category';
import SubCategory from './pages/Category/SubCategory';
import ProductList from './pages/Product/ProductList';
import Shopinformation from './pages/Master/Shopinformation';
import ExpenseList from './pages/Master/ExpenseList';
import SupplierList from './pages/supplier/SupplierList';
import EmployeeList from './pages/Master/EmployeeList';
import SalesReport from './pages/Report/SalesReport';
import StockReport from './pages/Report/StockReport';
import TaxReport from './pages/Report/TaxReport';
import Units from './pages/Units/Units';
import PurchaseEntryList from './pages/Purchase/PurchaseEntryList';
import Invoice from './pages/Invoice/Invoice';
import CustomerList from './pages/Workorder/CustomerList';
import FInvoice from './pages/Invoice/FinalInvoice/Invoice';
function App() {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route element={<Sidebar/>}>
            <Route path='/' element={<Dashboard />} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/product" element={<ProductList/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/subcategory" element={<SubCategory/>} />
            <Route path="/shopinformation" element={<Shopinformation/>} />
            <Route path="/employelist" element={<EmployeeList/>} />
            <Route path="/workorder" element={<CustomerList/>} />
            <Route path="/expenselist" element={<ExpenseList/>} />
            <Route path="/supplier" element={<SupplierList/>} />
            <Route path="/salesreport" element={<SalesReport/>} />
            <Route path="/stockreport" element={<StockReport/>} />
            <Route path="/taxreport" element={<TaxReport/>} />
            <Route path="/units" element={<Units/>} />
            <Route path="/purchaseentry" element={<PurchaseEntryList/>} />
            <Route path="/invoice" element={<Invoice/>} />
            <Route path="/finalinvoice" element={<FInvoice/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
