import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Navbar from '../../Components/Header/Navbar'

export default function Index() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />

    </>
  )
}
