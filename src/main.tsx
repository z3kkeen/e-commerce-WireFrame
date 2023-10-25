import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { Home } from './pages/Index.tsx'
import Register from './pages/Register.tsx';
import Checkout from './pages/Checkout.tsx';
import './index.css'

ReactDOM.createRoot(
  document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </React.StrictMode>, 
  )
