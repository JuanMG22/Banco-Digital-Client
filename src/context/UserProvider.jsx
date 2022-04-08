import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const userContext = createContext()

const UserProvider = ({ children }) => {
  const [login, setLogin] = useState(false)

  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const signIn = () => {
    if (token) {
      setLogin(true)
    }
  }

  const logOut = () => {
    localStorage.clear()
    setLogin(false)
    navigate('/')
  }

  const contextValue = {
    login,
    signIn,
    logOut
  }

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
