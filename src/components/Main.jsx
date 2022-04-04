import React from 'react'
import Home from '../pages/Home'
import UserPage from '../pages/UserPage'
import { Route, Routes } from 'react-router-dom'
import Movements from '../pages/Movements'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/movimientos' element={<Movements />} />
      </Routes>
    </main>
  )
}

export default Main
