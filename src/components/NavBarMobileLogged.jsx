import { Link } from 'react-router-dom'
import { FaHistory, FaHome, FaUserCircle, FaMoneyCheck } from 'react-icons/fa'

const NavBarMobileLogged = () => {
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
        to='/profile'
        className='flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-blue-700 focus:text-orange-500'
      >
        <FaUserCircle className='text-2xl text-gray-100' />
        <span className=' text-sm capitalize text-gray-100'>Perfil</span>
      </Link>
      <Link
        to='/movimientos'
        className='flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-blue-700 focus:text-orange-500'
      >
        <FaHistory className='text-2xl text-gray-100' />
        <span className='flex absolute -mt-7 ml-4'>
          <span className='animate-ping absolute inline-flex h-3 w-3 rounded-full bg-blue-400 opacity-75' />
          <span className='relative inline-flex rounded-full h-3 w-3 bg-blue-500' />
        </span>

        <span className=' text-sm capitalize text-gray-100'>Movimientos</span>
      </Link>
      <Link
        to='/user'
        className='flex flex-col flex-grow items-center justify-center overflow-hidden whitespace-no-wrap text-sm transition-colors duration-100 ease-in-out hover:bg-blue-700 focus:text-orange-500'
      >
        <FaMoneyCheck className='text-2xl text-gray-100' />
        <span className=' text-sm capitalize text-gray-100'>Saldo</span>
      </Link>
    </>
  )
}

export default NavBarMobileLogged
