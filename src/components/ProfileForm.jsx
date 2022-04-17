import React from 'react'

function ProfileForm () {
  return (
    <div className='w-full md:w-3/5 p-8 bg-white lg:ml-4 shadow-md'>
      <div className='rounded  shadow p-6'>
        <div className='pb-6'>
          <label for='name' className='font-semibold text-gray-700 block pb-1'>Nombre</label>
          <div className='flex'>
            <input disabled id='username' className='border-1  rounded-r px-4 py-2 w-full' type='text' value='Jane Name' />
          </div>
        </div>
        <div className='pb-4'>
          <label for='about' className='font-semibold text-gray-700 block pb-1'>Email</label>
          <input disabled id='email' className='border-1  rounded-r px-4 py-2 w-full' type='email' value='example@example.com' />
          <span className='text-gray-600 pt-4 block opacity-70'>Información de inicio de sesión personal de su cuenta</span>
        </div>
      </div>
    </div>

  )
}

export default ProfileForm
