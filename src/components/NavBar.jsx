import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserProvider'
import { navLinks } from '../services/navLinks'
import { RiLoginBoxLine, RiLogoutBoxRLine } from 'react-icons/ri'

const NavBar = () => {
  const { logOut } = useContext(userContext)

  const token = localStorage.getItem('token')

  const navBarLogin = token ? 'hidden' : 'flex items-center'
  const navBarLogout = token ? 'flex items-center' : 'hidden'
  const navBarLoginLink = token ? 'flex-grow' : ''
  return (
    <header>
      <nav
        className='flex items-center justify-between flex-wrap bg-blue-600 py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700'
      >
        <div className='flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0'>
          <div className='flex items-center flex-shrink-0 text-blue-50 mr-16'>
            <Link to='/' className='font-semibold text-xl tracking-tight'>Banco Digital</Link>
          </div>
          <div className='block lg:hidden '>
            <button
              id='nav'
              className='flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700'
            >
              <svg className='fill-current h-3 w-3' viewBox='0 0 20 20'><title>Menu</title>
                <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${navBarLoginLink} menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8`}>
          <div className={`${navBarLogout} text-md font-bold text-white lg:flex-grow`}>

            {
              navLinks.map(link => (
                <Link
                  key={link.id}
                  to={link.route}
                  className='mt-4 lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2'
                >
                  {link.text}
                </Link>
              ))
            }
          </div>

          <div className='flex'>

            <Link
              to='/login'
              className={`${navBarLogin} text-md px-4 ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0`}
            >
              Iniciar Sesión
              <RiLoginBoxLine className='text-3xl ml-1' />
            </Link>

            <Link
              to='/login'
              onClick={logOut}
              className={`${navBarLogout} text-md px-4 ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0`}
            >
              Cerrar Sesión
              <RiLogoutBoxRLine className='text-3xl ml-1' />
            </Link>
          </div>
        </div>

      </nav>
    </header>
  )
}

export default NavBar
