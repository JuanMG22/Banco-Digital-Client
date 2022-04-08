import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Btn from './Btn'
import Label from './Label'

const RegisterForm = () => {
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
        navigate('/login')
      })
      .catch((err) => console.log(err))
  }

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <Label to='name' text='Nombre' />
      <input
        type='text'
        aria-labelledby='name'
        name='name'
        className='bg-gray-50 border rounded.lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
        id='name'
        {...register('name', {
          required: {
            value: true,
            maxLength: 20,
            message: 'Ingrese un nombre'
          },
          pattern: {
            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
            message: 'Ingrese un nombre valido'
          }
        })}
      />
      {errors.name && (
        <p className='text-red-700 my-1'>{errors.name.message}</p>
      )}
      <Label to='lastName' text='Apellido' />
      <input
        type='text'
        aria-labelledby='lastName'
        name='lastName'
        id='lastName'
        className='bg-gray-50 border rounded.lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
        {...register('lastName', {
          required: {
            value: true,
            maxLength: 20,
            message: 'Ingrese un apellido'
          },
          pattern: {
            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
            message: 'Ingrese un apellido valido'
          }
        })}
      />
      {errors.lastName && (
        <p className='text-red-700 my-1'>{errors.lastName.message}</p>
      )}
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
      <div className='mt-8'>
        <Btn type='submit'>
          Registrarse
        </Btn>
      </div>
    </form>
  )
}

export default RegisterForm
