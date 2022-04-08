import axios from 'axios'
import { useContext } from 'react'
import Btn from './Btn'
import Label from './Label'
import LoginTitle from './LoginTitle'
import { userContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const LoginForm = () => {
  const { signIn } = useContext(userContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    const email = data.email.toLowerCase()
    const password = data.password

    axios
      .post('https://banco-digital-nc.herokuapp.com/login', { email, password })
      .then(response => {
        console.log(response.data)
        const tokenRecibido = response.data.token
        localStorage.setItem('token', tokenRecibido)
        signIn()
        navigate('/')
      })
      .catch(() => {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
          title: 'Email o contraseña incorrectos',
          icon: 'error',
          confirmButtonColor: '#2563EB'
        })
      })
  }

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <LoginTitle />
      <Label to='email' text='Email' />
      <input
        type='email'
        aria-labelledby='email'
        name='email'
        className='bg-gray-50 border rounded.lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
        id='email'
        {...register('email', {
          required: {
            value: true,
            maxLength: 20,
            message: 'Ingrese un email'
          },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Ingrese un email valido'
          }
        })}
      />
      {errors.email && (
        <p className='text-red-700 my-1'>{errors.email.message}</p>
      )}
      <div className='mt-6 w-full'>
        <Label to='pass' text='Contraseña' />
        <input
          type='password'
          aria-labelledby='password'
          name='password'
          className='bg-gray-50 border rounded.lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
          id='pass'
          {...register('password', {
            required: {
              value: true,
              maxLength: 20,
              message: 'Ingrese una contraseña'
            }
          })}
        />
        {errors.password && (
          <p className='text-red-700 my-1'>{errors.password.message}</p>
        )}
      </div>
      <div className='mt-8'>
        <Btn type='submit'>
          Iniciar
        </Btn>
      </div>
    </form>
  )
}

export default LoginForm
