import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Images from './components/Images'
import List from './components/List'
import Heading from './components/Heading'
import Button from './components/Button'
import Badge from './components/Badge'
import Product from './components/Product'
import Product2 from './components/Product2'
import Product3 from './components/Product3'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Rootlayout from './components/Rootlayout'
import Homepage from './pages/Homepage'
import Aboutpage from './pages/Aboutpage'
import ProductDetails from './pages/ProductDetails'
import Cartpage from './pages/Cartpage'
import Checkoutpage from './pages/Checkoutpage'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<Rootlayout />}>

          <Route path="/" element={<Homepage />}></Route>
          <Route path="/about" element={<Aboutpage />}></Route>
          <Route path="/productdetails" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cartpage />}></Route>
          <Route path="/checkout" element={<Checkoutpage />}></Route>

      </Route>
      </>
    )
  );

  return (
    <>


    <RouterProvider router={router} />

    </>
  )
}

export default App
