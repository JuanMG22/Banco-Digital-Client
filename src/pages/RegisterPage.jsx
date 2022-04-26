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
        <meta name='description' content='Banco Digital, registrate y disfruta de todos los beneficios que ofrece una banca digital' />
        <meta name='keywords' content='banco, finanzas, dinero, iniciar sesion, register' />
        <meta property='og:title' content='Banco Digital' />
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164337251-a9f6f58a-0eaa-4ec6-a420-9cc43d53c688.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/register' />
        <meta property='og:type' content='fintech' />
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
