import { createContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export const userContext = createContext()

const UserProvider = ({ children }) => {
  const token = localStorage.getItem('token')

  const navigate = useNavigate()

  const showModal = (title, icon) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: title,
      icon: icon,
      background: '#fff',
      confirmButtonColor: '#2563EB',
      confirmButtonText: 'Aceptar',
      customClass: {
        title: 'modal-title',
        confirmButton: 'modal-confirm-btn'
      }
    })
  }

  const showLoading = (title) => {
    const MySwal = withReactContent(Swal)
    MySwal.fire({
      title: title,
      allowOutsideClick: false,
      showConfirmButton: false,
      willOpen: () => {
        MySwal.showLoading()
      }
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
    showModal,
    showLoading
  }

  return (
    <userContext.Provider value={contextValue}>
      {children}
    </userContext.Provider>
  )
}

export default UserProvider
