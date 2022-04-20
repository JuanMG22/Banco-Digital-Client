import userService from '../services/userService'
import Btn from './Btn'
import Label from './Label'
import FormError from './FormError'
import { useForm } from 'react-hook-form'

const NewMovementForm = () => {
  const onSubmit = (data) => {
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')

    const movementData = {
      description: data.description,
      amount: data.amount,
      userId
    }

    userService
      .NewMovement(movementData, token)
      .then(() => location.reload())
  }

  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <form method='POST' onSubmit={handleSubmit(onSubmit)}>
      <Label to='description' text='Descripción' />
      <input
        type='text'
        aria-labelledby='description'
        name='description'
        className='input'
        id='description'
        {...register('description', {
          required: {
            value: true,
            message: 'Ingrese una descripción'
          }
        })}
      />
      {errors.description && (<FormError err={errors.description.message} />)}
      <Label to='pass' text='Monto' />
      <input
        type='number'
        aria-labelledby='amount'
        name='amount'
        className='input'
        id='amount'
        {...register('amount', {
          required: {
            value: true,
            message: 'Ingrese un monto'
          }
        })}
      />
      {errors.amount && (<FormError err={errors.amount.message} />)}
      <Btn>
        Enviar
      </Btn>
    </form>
  )
}

export default NewMovementForm
