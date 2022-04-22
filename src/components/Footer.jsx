import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../context/UserProvider'

const linksLogged = [
  { text: 'Inicio', route: '/', id: 1 },
  { text: 'Saldo', route: '/user', id: 2 },
  { text: 'Movimientos', route: '/movimientos', id: 3 },
  { text: 'Perfil', route: '/profile', id: 4 }
]
const linksNotLogged = [
  { text: 'Inicio', route: '/', id: 1 },
  { text: 'Loguearse', route: '/login', id: 2 },
  { text: 'Registrarse', route: '/register', id: 3 }
]
const Footer = () => {
  const { token } = useContext(userContext)

  const links = token ? linksLogged : linksNotLogged
  return (
    <footer className='text-gray-600 body-font bg-blue-600 border-t border-gray-200 mt-10 lg:mt-0 mb-12 lg:mb:0'>
      <div className='container lg:justify-evenly px-5 py-14 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left'>
          <a className='flex font-medium items-center md:justify-start justify-center text-gray-900'>
            <span className='text-xl text-white font-bold'>Banco Digital</span>
          </a>
          <p className='mt-2 text-md text-white'>Tu cuenta digital práctica y sin costos.</p>
        </div>
        <div className='justify-center flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
          <div className='lg:w-1/4 md:w-1/2 w-full px-4'>
            <h2 className='font-bold text-white tracking-widest text-md mb-3'>CATEGORIAS</h2>
            <nav className='list-none'>
              {
                  links.map(link => (
                    <li key={link.id} className='mb-1'>
                      <Link to={link.route} className='text-white hover:text-gray-300'>
                        {link.text}
                      </Link>
                    </li>
                  ))
              }
            </nav>
          </div>
        </div>
      </div>
      <div className='bg-blue-700'>
        <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
          <p className='text-white text-sm text-center sm:text-left'>
            © 2022 Banco Digital
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
            <a className='text-gray-200'>
              <svg fill='currentColor' className='w-5 h-5' viewBox='0 0 24 24'>
                <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' />
              </svg>
            </a>
            <a className='ml-3 text-gray-200'>
              <svg fill='currentColor' className='w-5 h-5' viewBox='0 0 24 24'>
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
              </svg>
            </a>
            <a className='ml-3 text-gray-200'>
              <svg fill='currentColor' className='w-5 h-5' viewBox='0 0 24 24'>
                <path d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
                <circle cx='4' cy='4' r='2' />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
