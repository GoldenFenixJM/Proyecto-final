import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'
import { Home, Login } from '../Pages'

export const EcommerceRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}