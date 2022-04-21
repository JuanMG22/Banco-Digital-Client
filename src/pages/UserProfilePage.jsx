import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import UserProfile from '../components/UserProfile'
import userService from '../services/userService'

function UserProfilePage () {
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(true)

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
      {
        loading
          ? <Loader />
          : <UserProfile
              userData={userData}
            />
      }
    </>
  )
}

export default UserProfilePage
