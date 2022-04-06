import { Link } from 'react-router-dom'

const LoginTitle = () => {
  return (
    <>
      <h2
        tabIndex='0'
        className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800'
      >
        Inicia sesión
      </h2>
      <p
        tabIndex='0'
        className='focus:outline-none text-sm mt-4 mb-4 font-medium leading-none text-gray-500'
      >
        ¿No tenes una cuenta?
        <Link
          to='/register'
          className='mx-2 hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer'
        >
          Registrate acá
        </Link>
      </p>
    </>
  )
}

export default LoginTitle
