/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from '../components/navbar'
import Contact from '../components/contact'
import Footer from '../components/footer'

function contacts() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <Contact />
            </div>
            <Footer />

        </>
    )
}

export default contacts
