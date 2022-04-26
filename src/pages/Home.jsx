import React from 'react'
import HomeUser from '../components/HomeUser'
import HomeNotUser from '../components/HomeNotUser'
import Helmet from 'react-helmet'

const Home = () => {
  const token = localStorage.getItem('token')

  return (

    <>
      <Helmet>
        <meta name='description' content='Banco Digital, tu cuenta digital práctica y sin costos. Registrate' />
        <meta name='keywords' content='banco, finanzas, dinero' />
        <meta property='og:title' content='Banco Digital' />
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164337251-a9f6f58a-0eaa-4ec6-a420-9cc43d53c688.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/' />
        <meta property='og:type' content='fintech' />
        <title>Banco Digital - Home</title>
      </Helmet>
      {token ? <HomeUser /> : <HomeNotUser />}
    </>
  )
}

export default Home
