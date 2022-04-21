import { useEffect, useState, useContext } from 'react'
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
