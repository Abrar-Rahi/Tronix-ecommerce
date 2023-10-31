import React from 'react'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'
import { Outlet } from 'react-router-dom'

const Rootlayout = () => {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Rootlayout