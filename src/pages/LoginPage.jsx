import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import FormTitle from '../components/FormTitle'
import LoginForm from '../components/LoginForm'
import { userContext } from '../context/UserProvider'

const LoginPage = () => {
  const { token } = useContext(userContext)
  return (
    <>
      {token && <Navigate to='/' />}
      <section className='flex justify-center items-center h-[42rem]'>
        <div className='bg-white shadow-gray-600 shadow-lg rounded w-[23rem] lg:w-1/3   xl:w-1/4 p-10'>
          <FormTitle
            to='/register'
            title='Inicia Sesión'
            text='¿No tenes una cuenta?'
            linkText='Registrate acá'
          />
          <LoginForm />
        </div>
      </section>
    </>
  )
}

export default LoginPage
