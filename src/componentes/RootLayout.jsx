import React, { Children } from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
// import Footer from './Footer'

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            {Outlet(Children)}
            {/* <Footer/> */}
        </>
    )
}

export default RootLayout