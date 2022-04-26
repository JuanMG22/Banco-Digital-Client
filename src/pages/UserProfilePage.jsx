import { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import UserProfile from '../components/UserProfile'
import userService from '../services/userService'

function UserProfilePage () {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userService
      .getUser(userId)
      .then(res => {
        setUserData(res)
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
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164756590-72fe1d8f-9dfe-4d67-902e-57989498fea9.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/profile' />
        <meta property='og:type' content='fintech' />
        <title>Banco Digital - Perfil</title>
      </Helmet>
      {!token && <Navigate to='/' />}
      {
        loading
          ? <Loader />
          : <UserProfile
              userData={userData}
              setUserData={setUserData}
            />
      }
    </>
  )
}

export default UserProfilePage
