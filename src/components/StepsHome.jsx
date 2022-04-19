import React from 'react'
import { Link } from 'react-router-dom'

function StepsHome () {
  return (
    <div className='h-fit flex items-center bg-blue-600 px-4 md:px-1'>
      <div className='max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='flex justify-between flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4'>

          <div className='w-full lg:w-1/4 shadow-sm shadow-blue-600 overflow-hidden  hover:shadow-2xl  transition duration-500 transform hover:scale-105 lg:hover:scale-110 cursor-pointer'>
            <Link to='/register' className='w-full lg:w-1/4'>
              <div className='widget w-full p-7 rounded-lg  border border-gray-400 bg-gray-300 h-32'>
                <div className='flex flex-row items-center justify-between'>
                  <div className='flex flex-col'>
                    <div className='text-s uppercase font-bold text-gray-800'>
                      Paso 1
                    </div>
                    <div className='text-xl font-light'>
                      Ingresa al formulario aqui
                    </div>
                  </div>
                </div>
              </div>

            </Link>
          </div>
          <div className='w-full lg:w-1/4 shadow-blue-600'>
            <div className='widget w-full p-7 rounded-lg bg-gray-300 border border-gray-400 h-32'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='text-s uppercase font-bold text-gray-800'>
                    Paso 2
                  </div>
                  <div className='text-xl font-light'>
                    Completa tus datos
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/4 shadow-blue-600'>
            <div className='widget w-full p-7 rounded-lg bg-gray-300 border border-gray-400 h-32'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='text-s uppercase font-bold text-gray-800'>
                    Paso 3
                  </div>
                  <div className='text-xl font-light'>
                    !Listo! Accede a tu cuenta
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StepsHome
