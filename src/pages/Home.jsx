import React from 'react'
import HomeUser from '../components/HomeUser'
import HomeNotUser from '../components/HomeNotUser'

const Home = () => {
  const token = localStorage.getItem('token')

  return (

    <>
      {token ? <HomeUser /> : <HomeNotUser />}

    </>
  )
}

export default Home
