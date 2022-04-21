import avatar from '../img/user-avatar.png'

function BoxProfile () {
  return (
    <div className=' flex-col justify-between items-center w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md'>
      <div className='flex flex-col justify-center items-center gap-5'>
        <div className='w-full flex justify-center'>
          <img className='max-w-xs items-center w-[12rem] h-[12rem] object-cover rounded-full border' src={avatar} alt='user-avatar' />
        </div>
        <span className='text-xl font-semibold block'>Perfil de Usuario</span>
        <span className='text-gray-600'>
          Esta información es secreta así que ten cuidado.
        </span>
      </div>

    </div>
  )
}

export default BoxProfile
