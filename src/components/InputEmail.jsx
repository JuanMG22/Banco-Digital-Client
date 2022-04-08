
const InputEmail = ({ register, errors }) => {
  return (
    <>
      <input
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
    </>
  )
}

export default InputEmail
