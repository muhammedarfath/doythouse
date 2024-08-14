import { useState } from 'react'
import Sidebar from "./components/Layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from './pages/Dashboard';
import Login from './pages/authentication/Login';
import AddProduct from './pages/Product/AddProduct';
import Category from './pages/Category/Category';
import SubCategory from './pages/Category/SubCategory';
import Shopinformation from './pages/Shopinformation';
import CustomerList from './pages/CustomerList';
import ProductList from './pages/Product/ProductList';
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
            <Route path="/customerlist" element={<CustomerList/>} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
