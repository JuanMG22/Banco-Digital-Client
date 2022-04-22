import { useForm } from 'react-hook-form'
import { BsPencilSquare } from 'react-icons/bs'
import { useState, useContext } from 'react'
import userService from '../services/userService'
import FormError from './FormError'
import Btn from './Btn'
import { userContext } from '../context/UserProvider'

function ProfileForm ({ name, lastName, email, setUserData }) {
  const [showEditForm, setShowEditForm] = useState(false)
  const { token, userId, showModal } = useContext(userContext)
  const showForm = () => setShowEditForm(true)

  const updateData = async () => {
    const userId = localStorage.getItem('userId')
    try {
      const userData = await userService.getUser(userId)
      setUserData(userData)
    } catch (error) {
      console.log(error)
    }
  }

  const onSubmit = (data) => {
    const email = { email: data.email.toLowerCase() }
    userService
      .editUser(userId, email, token)
      .then(() => {
        showModal('Los datos fueron actualizados', 'success')
        setShowEditForm(false)
        updateData()
      })
      .catch((err) => console.log(err))
  }
  const { register, handleSubmit, formState: { errors } } = useForm()

  return (
    <div className='w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md'>
      <div className='rounded  shadow p-6'>
        <div className='pb-6'>
          <label htmlFor='name' className='font-semibold text-gray-700 block pb-1'>Nombre</label>
          <div className='flex'>
            <input disabled className='border-1  rounded-r px-4 py-2 w-full' type='text' value={name} />
          </div>
        </div>
        <div className='pb-6'>
          <label htmlFor='lastname' className='font-semibold text-gray-700 block pb-1'>Apellido</label>
          <div className='flex'>
            <input disabled className='border-1  rounded-r px-4 py-2 w-full' type='text' value={lastName} />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className='pb-4'>
          <label htmlFor='email' className='font-semibold text-gray-700 block pb-1'>Email</label>
          <div className='relative flex justify-end items-center'>
            {
              showEditForm
                ? <input
                    type='text'
                    aria-labelledby='email'
                    name='email'
                    placeholder={email}
                    className='border-2 border-red-900 rounded-r px-4 py-2 w-full'
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
                : <div disabled type='text' className='border-1 rounded-r px-4 py-2 w-full'>{email}</div>
            }
            {!showEditForm &&
              <button onClick={showForm} className='absolute'>
                <BsPencilSquare className='text-xl text-blue-600' />
              </button>}
          </div>
          {errors.email && (<FormError err={errors.email.message} />)}
          {showEditForm &&
            <Btn type='submit' btnType='btnEdit'>
              Editar
            </Btn>}
        </form>
        <span className='text-gray-600 pt-4 block opacity-70'>Información de inicio de sesión personal de su cuenta</span>
      </div>
    </div>

  )
}

export default ProfileForm
