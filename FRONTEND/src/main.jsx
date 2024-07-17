/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <div className=""><App /></div>

  </BrowserRouter>,

)
