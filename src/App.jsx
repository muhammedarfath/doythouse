import { useState } from 'react'
import Sidebar from "./components/Layout/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Dashboard} from './pages/Dashboard';
function App() {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route element={<Sidebar />}>
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </Router> 
    </div>
  )
}

export default App
