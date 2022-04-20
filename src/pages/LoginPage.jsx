import FormTitle from '../components/FormTitle'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
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
  )
}

export default LoginPage
