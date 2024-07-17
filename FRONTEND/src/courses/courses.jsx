/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar'
import Course from '../components/course'
import Footer from '../components/footer'
function courses() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Course />
            </div>
            <Footer />
        </>
    )
}

export default courses
