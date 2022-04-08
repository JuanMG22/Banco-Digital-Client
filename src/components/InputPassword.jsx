import { MdOutlineVisibility } from 'react-icons/md'

const InputPassword = ({ register, errors }) => {
  return (
    <>
      <div className='relative flex items-center justify-center'>
        <input
          aria-labelledby='email'
          name='email'
          className='bg-gray-50 border rounded.lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
          id='email'
          {...register('password', {
            required: {
              value: true,
              maxLength: 20,
              message: 'Ingrese una contraseña'
            }
          })}
        />
        <div className='absolute right-0 mt-2 mr-3 cursor-pointer'>
          <MdOutlineVisibility />
        </div>
      </div>
      {errors.password && (
        <p className='text-red-700 my-1'>{errors.password.message}</p>
      )}
    </>
  )
}

export default InputPassword
