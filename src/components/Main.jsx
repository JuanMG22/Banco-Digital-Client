import React from 'react'
import Home from '../pages/Home'
import UserPage from '../pages/UserPage'
import LoginPage from '../pages/LoginPage'
import Movements from '../pages/Movements'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/movimientos' element={<Movements />} />
      </Routes>
    </main>
  )
}

export default Main
