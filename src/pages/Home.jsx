import React from 'react'
import HomeUser from '../components/HomeUser'
import HomeNotUser from '../components/HomeNotUser'
import Helmet from 'react-helmet'

const Home = () => {
  const token = localStorage.getItem('token')

  return (

    <>
      <Helmet>
        <title>Banco Digital - Home</title>
      </Helmet>
      {token ? <HomeUser /> : <HomeNotUser />}
    </>
  )
}

export default Home
