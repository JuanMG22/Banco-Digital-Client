import { useContext } from 'react'
import Helmet from 'react-helmet'
import { Navigate } from 'react-router-dom'
import FormTitle from '../components/FormTitle'
import LoginForm from '../components/LoginForm'
import { userContext } from '../context/UserProvider'

const LoginPage = () => {
  const { token } = useContext(userContext)
  return (
    <>
      <Helmet>
        <meta name='description' content='Banco Digital, inicia sesión y disfruta de todos los beneficios que ofrece una banca digital' />
        <meta name='keywords' content='banco, finanzas, dinero, iniciar sesion, login' />
        <meta property='og:title' content='Banco Digital' />
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164337251-a9f6f58a-0eaa-4ec6-a420-9cc43d53c688.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/login' />
        <meta property='og:type' content='fintech' />
        <title>Banco Digital - Login</title>
      </Helmet>
      {token && <Navigate to='/' />}
      <section className='flex justify-center items-center h-[40.3rem]'>
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
