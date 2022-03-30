import React from 'react'
import Home from './pages/Home'
import UserPage from './pages/UserPage'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </main>
  )
}

export default Main
