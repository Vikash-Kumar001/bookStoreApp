/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar'
import About from '../components/about'
import Footer from '../components/footer'

function abouts() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <About />
            </div>
            <Footer />

        </>
    )
}

export default abouts
