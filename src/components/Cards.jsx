import { Link } from 'react-router-dom'

const Cards = () => {
  return (
    <div className='flex  flex-col  md:flex-row justify-center lg:justify-evenly flex-wrap gap-3 my-10'>
      <div>
        <div className='bg-white max-w-xs min-h-xs md:w-54 lg:w-64 shadow-lg   mx-auto  border-b-4 border-blue-600 rounded-2xl overflow-hidden  hover:shadow-2xl transition duration-200 transform hover:scale-105 cursor-pointer'>
          <div className='bg-blue-600  flex h-20  items-center'>
            <h1 className='text-white ml-4 border-2 py-2 px-4 rounded-full'>1</h1>
            <p className='ml-4 text-white uppercase'>Perfil</p>
          </div><p className='py-6 px-6 text-lg tracking-wide text-center text-gray-600'>Actualiza tus datos</p>

          <div className='flex justify-center px-5 mb-2 text-sm '>
            <Link to='/profile' className='border border-blue-600 text-blue-600 rounded-md px-4 py-2 m-2 transition duration-200 ease select-none hover:text-white hover:bg-blue-500 focus:outline-none focus:shadow-outline'>Ver</Link>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-white max-w-xs lg:w-64 mx-auto rounded-2xl  border-b-4 border-blue-600 overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 transform hover:scale-105 cursor-pointer'>
          <div className='h-20 bg-blue-600 flex items-center '>
            <h1 className='text-white ml-4 border-2 py-2 px-4 rounded-full'>2</h1>
            <p className=' text-white text-base ml-4 uppercase'>Movimientos
            </p>
          </div><p className='py-6 px-6 text-lg tracking-wide text-center text-gray-600'>Revisa tus movimientos</p>

          <div className='flex justify-center px-5 mb-2 text-sm '>
            <Link
              to='/movimientos' className='border border-blue-600 text-blue-600 rounded-md px-4 py-2 m-2 transition duration-200 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline'
            >
              Ver
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className='bg-white max-w-xs md:w-52 lg:w-64  mx-auto rounded-2xl  border-b-4 border-blue-600 overflow-hidden shadow-lg hover:shadow-2xl transition duration-200 transform hover:scale-105 cursor-pointer'>
          <div className='h-20 bg-blue-600 flex items-center '>
            <h1 className='text-white ml-4 border-2 py-2 px-4 rounded-full'>3</h1>
            <p className=' text-white text-base ml-4 uppercase'>
              saldo
            </p>
          </div>
          <p className='py-6  px-6 text-lg tracking-wide text-center text-gray-600'>Revisa tu saldo</p>

          <div className='flex justify-center px-5 mb-2 text-sm '>
            <Link to='/user' className='border border-blue-600 text-blue-600 rounded-md px-4 py-2 m-2 transition duration-200 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline'>
              Ver
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
