import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const userContext = createContext()

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const showModal = (title) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: title,
      icon: 'error',
      confirmButtonColor: '#2563EB'
    })
  }

  const logOut = () => {
    localStorage.clear()
    navigate('/')
    window.location.reload()
  }

  const contextValue = {
    token,
    logOut,
    navigate,
    showModal
  }

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
