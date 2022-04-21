import { Navigate } from 'react-router-dom'
import { useContext } from 'react'
import FormTitle from '../components/FormTitle'
import RegisterForm from '../components/RegisterForm'
import { userContext } from '../context/UserProvider'
import Helmet from 'react-helmet'

const RegisterPage = () => {
  const { token } = useContext(userContext)
  return (
    <>
      <Helmet>
        <title>Banco Digital - Registro</title>
      </Helmet>
      {token && <Navigate to='/' />}
      <section className='flex justify-center items-center h-[40.3rem]'>
        <div className='bg-white shadow-gray-600 shadow-lg rounded w-[23rem] lg:w-1/3   xl:w-1/4 p-10'>
          <FormTitle
            to='/login'
            title='Registrate'
            text='¿Ya tenes una cuenta?'
            linkText='Inicia sesión acá'
          />
          <RegisterForm />
        </div>
      </section>
    </>
  )
}

export default RegisterPage
