import React from 'react'
import Home from '../pages/Home'
import UserPage from '../pages/UserPage'
import LoginPage from '../pages/LoginPage'
import Movements from '../pages/Movements'
import UserProfile from '../pages/UserProfile'
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
        <Route path='/profile' element={<UserProfile />} />
      </Routes>
    </main>
  )
}

export default Main
