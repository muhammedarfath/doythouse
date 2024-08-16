import { useState } from 'react'
import Sidebar from "./components/Layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from './pages/Dashboard';
import Login from './pages/authentication/Login';
import AddProduct from './pages/Product/AddProduct';
import Category from './pages/Category/Category';
import SubCategory from './pages/Category/SubCategory';
import CustomerList from './pages/CustomerList';
import ProductList from './pages/Product/ProductList';
import Shopinformation from './pages/Master/Shopinformation';
import ExpenseList from './pages/Master/ExpenseList';
import SupplierList from './pages/supplier/SupplierList';
import EmployeeList from './pages/Master/EmployeeList';
function App() {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route element={<Sidebar />}>
            <Route path='/' element={<Dashboard />} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/product" element={<ProductList/>} />
            <Route path="/category" element={<Category/>} />
            <Route path="/subcategory" element={<SubCategory/>} />
            <Route path="/shopinformation" element={<Shopinformation/>} />
            <Route path="/employelist" element={<EmployeeList/>} />
            <Route path="/customerlist" element={<CustomerList/>} />
            <Route path="/expenselist" element={<ExpenseList/>} />
            <Route path="/supplier" element={<SupplierList/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
