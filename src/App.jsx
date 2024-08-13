import { useState } from 'react'
import Sidebar from "./components/Layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from './pages/Dashboard';
import Login from './pages/authentication/Login';
function App() {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route element={<Sidebar />}>
            <Route path='/' element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router> 
    </div>
  )
}

export default App
