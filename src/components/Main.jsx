import React from 'react'
import Home from '../pages/Home'
import UserPage from '../pages/UserPage'
import LoginPage from '../pages/LoginPage'
import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import MovementsPage from '../pages/MovementsPage'
import UserProfilePage from '../pages/UserProfilePage'
import NotFound from '../pages/NotFound'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/movimientos' element={<MovementsPage />} />
        <Route path='/profile' element={<UserProfilePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default Main
