/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Home from './home/home'
import {Route, Routes } from "react-router-dom"
import Course from './courses/courses'
import Signup from './components/signup'
import Contact from './contact/contacts'
import About from './about/abouts'
import { Toaster } from 'react-hot-toast';
  function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={ <Course />} />
        <Route path="/signup" element={ <Signup />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/about" element={ <About />} />
      </Routes>
      <Toaster />
      </div>
    </>
  )
}

export default App