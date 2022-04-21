function ProfileForm ({ name, lastName, email }) {
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
        <div className='pb-4'>
          <label htmlFor='about' className='font-semibold text-gray-700 block pb-1'>Email</label>
          <input disabled id='email' className='border-1  rounded-r px-4 py-2 w-full' value={email} />
          <span className='text-gray-600 pt-4 block opacity-70'>Información de inicio de sesión personal de su cuenta</span>
        </div>
      </div>
    </div>

  )
}

export default ProfileForm
