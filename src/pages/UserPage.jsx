import { useEffect, useState, useContext } from 'react'
import Helmet from 'react-helmet'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import UserPageLoaded from '../components/UserPageLoaded'
import { userContext } from '../context/UserProvider'
import userService from '../services/userService'

const UserPage = () => {
  const [userBalance, setUserBalance] = useState(Number)
  const [loading, setLoading] = useState(true)
  const { token } = useContext(userContext)

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userService
      .getUser(userId)
      .then(res => {
        setUserBalance(res.balance)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      <Helmet>
        <meta name='description' content='Banco Digital, disfruta de todos los beneficios que ofrece una banca digital. Revisa tu saldo como cliente' />
        <meta name='keywords' content='banco, finanzas, dinero, saldo, user balance' />
        <meta property='og:title' content='Banco Digital' />
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164500867-d2cd36b0-aa7c-4357-ac46-c7edd268b0a8.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/user' />
        <meta property='og:type' content='fintech' />
        <title>Banco Digital - Saldo</title>
      </Helmet>
      {!token && <Navigate to='/' />}
      {
        loading
          ? <Loader />
          : <UserPageLoaded balance={userBalance} />
      }
    </>
  )
}

export default UserPage
