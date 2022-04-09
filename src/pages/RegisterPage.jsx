import FormTitle from '../components/FormTitle'
import RegisterForm from '../components/RegisterForm'

const RegisterPage = () => {
  return (
    <section className='flex justify-center items-center'>
      <div className='bg-white shadow-gray-600 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10 mt-32'>
        <FormTitle
          to='/login'
          title='Registrate'
          text='¿Ya tenes una cuenta?'
          linkText='Inicia sesión acá'
        />
        <RegisterForm />
      </div>
    </section>
  )
}

export default RegisterPage
