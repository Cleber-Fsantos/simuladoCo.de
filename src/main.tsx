import React from 'react'
import ReactDOM from 'react-dom/client'

import {Route, BrowserRouter, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

import './index.css'
import Home from './pages/Home'
import Login from './pages/Login'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
