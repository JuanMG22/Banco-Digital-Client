import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../context/UserProvider'
import { navLinks } from '../services/navLinks'
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'
import userService from '../services/userService'
import NavBarMobile from './NavBarMobile'

const NavBar = () => {
  const { logOut, token } = useContext(userContext)
  const [userName, setUserName] = useState()

  const navBarLogin = token ? 'hidden' : 'flex items-center'
  const navBarLogout = token ? 'flex items-center' : 'hidden'
  const navBarLoginLink = token && 'flex-grow'

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    if (userId) {
      userService
        .getUser(userId)
        .then(res => {
          setUserName(res.name)
        })
        .catch(error => console.log(error))
    }
  }, [token])
  return (
    <header>
      <nav
        className='flex items-center justify-between flex-wrap bg-blue-600 py-4 lg:px-12 w-full border-b border-gray-400 border-opacity-10'
      >
        <div className='flex justify-between items-center lg:w-auto w-full pl-6 pr-2 pb-0 lg:pb-0'>
          <div className='flex items-center flex-shrink-0 text-blue-50 mr-16'>
            <Link to='/' className='font-bold text-xl tracking-tight'>
              Banco Digital
            </Link>
          </div>
          <Link
            to='/'
            className={`${navBarLogout} lg:hidden text-md px-4 ml-2 py-2 rounded text-white font-bold hover:text-white  lg:mt-0`}
          >
            {userName}
            <button onClick={logOut} className='hover:bg-blue-700 ml-1'>
              <FaSignOutAlt className='text-3xl' />
            </button>
          </Link>
        </div>

        <div className={`${navBarLoginLink} hidden w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8`}>
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
              <FaSignInAlt className='text-3xl ml-1' />
            </Link>

            <Link
              to='/'
              onClick={logOut}
              className={`${navBarLogout} text-md px-4 ml-2 py-2 rounded text-white font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0`}
            >
              {userName}
              <FaSignOutAlt className='text-3xl ml-1' />
            </Link>
          </div>
        </div>

      </nav>

      <NavBarMobile token={token} />
    </header>
  )
}

export default NavBar
