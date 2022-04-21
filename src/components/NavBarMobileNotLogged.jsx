import { Link } from 'react-router-dom'
import { FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa'

const NavBarMobileNotLogged = () => {
  return (
    <>
      <Link
        to='/'
        className='flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-blue-700 focus:text-orange-500'
      >
        <FaHome className='text-2xl text-gray-100' />

        <span className=' text-sm capitalize text-gray-100'>Inicio</span>
      </Link>
      <Link
        to='/login'
        className='flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-blue-700 focus:text-orange-500'
      >
        <FaSignInAlt className='text-2xl text-gray-100' />
        <span className=' text-sm capitalize text-gray-100'>Iniciar Sesión</span>
      </Link>
      <Link
        to='/register'
        className='flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-blue-700 focus:text-orange-500'
      >
        <FaUserPlus className='text-2xl text-gray-100' />

        <span className=' text-sm capitalize text-gray-100'>Registrarse</span>
      </Link>
    </>
  )
}

export default NavBarMobileNotLogged
