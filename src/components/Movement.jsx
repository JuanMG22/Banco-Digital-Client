import avatar from '../img/user-avatar.png'

const Movement = ({ date, description, amount }) => {
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0 w-10 h-10'>
            <img
              className='w-full h-full rounded-full'
              src={avatar}
              alt=''
            />
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {date}
            </p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          {description}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>
          $ {amount}
        </p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <span
          className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
        >
          <span
            aria-hidden
            className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
          />
          <span className='relative'>Aprobado</span>
        </span>
      </td>
    </tr>
  )
}

export default Movement
