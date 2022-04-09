import { useContext } from 'react'
import { userContext } from '../context/UserProvider'
import userService from '../services/userService'
import { useForm } from 'react-hook-form'
import Btn from './Btn'
import Label from './Label'
import FormError from './FormError'

const RegisterForm = () => {
  const { navigate, showModal } = useContext(userContext)

  const onSubmit = (data) => {
    const userData = {
      name: data.name,
      lastName: data.lastName,
      email: data.email.toLowerCase(),
      password: data.password
    }

    userService
      .userRegister(userData)
      .then(() => navigate('/'))
      .catch(() => showModal('Ya existe un usuario con los datos ingresados'))
  }

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <Label to='name' text='Nombre' />
      <input
        type='text'
        aria-labelledby='name'
        name='name'
        className='input'
        id='name'
        {...register('name', {
          required: {
            value: true,
            message: 'Ingrese un nombre'
          },
          pattern: {
            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
            message: 'Ingrese un nombre valido'
          }
        })}
      />
      {errors.name && (<FormError err={errors.name.message} />)}
      <Label to='lastName' text='Apellido' />
      <input
        type='text'
        aria-labelledby='lastName'
        name='lastName'
        id='lastName'
        className='input'
        {...register('lastName', {
          required: {
            value: true,
            message: 'Ingrese un apellido'
          },
          pattern: {
            value: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i,
            message: 'Ingrese un apellido valido'
          }
        })}
      />
      {errors.lastName && (<FormError err={errors.lastName.message} />)}
      <Label to='email' text='Email' />
      <input
        type='text'
        aria-labelledby='email'
        name='email'
        className='input'
        id='email'
        {...register('email', {
          required: {
            value: true,
            message: 'Ingrese un email'
          },
          pattern: {
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Ingrese un email valido'
          }
        })}
      />
      {errors.email && (<FormError err={errors.email.message} />)}
      <Label to='pass' text='Contraseña' />
      <input
        type='password'
        aria-labelledby='password'
        name='password'
        className='input'
        id='pass'
        {...register('password', {
          required: {
            value: true,
            message: 'Ingrese una contraseña'
          }
        })}
      />
      {errors.password && (<FormError err={errors.password.message} />)}
      <Btn>
        Registrarse
      </Btn>
    </form>
  )
}

export default RegisterForm
