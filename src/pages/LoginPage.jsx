import FormTitle from '../components/FormTitle'
import Hr from '../components/Hr'
import LoginForm from '../components/LoginForm'
import LoginWithList from '../components/LoginWithList'

const LoginPage = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='bg-white shadow-gray-600 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10 mt-32'>
        <FormTitle
          to='/register'
          title='Inicia Sesión'
          text='¿No tenes una cuenta?'
          linkText='Registrate acá'
        />
        <LoginForm />
        <Hr />
        <LoginWithList />
      </div>
    </section>
  )
}

export default LoginPage
