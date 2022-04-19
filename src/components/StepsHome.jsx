import React from 'react'
import { Link } from 'react-router-dom'

function StepsHome () {
  return (
    <div className='h-full flex items-center bg-blue-600'>
      <div className='max-w-7xl w-full mx-auto py-6 sm:px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row w-full lg:space-x-2 space-y-2 lg:space-y-0 mb-2 lg:mb-4'>

          <div className='w-full lg:w-1/4'>
            <Link to='/register' className='w-full lg:w-1/4'>
              <div className='widget w-full p-7 rounded-lg border-gray-400 bg-gray-300 h-32'>
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
          <div className='w-full lg:w-1/4'>
            <div className='widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='text-xs uppercase font-light text-gray-500'>
                    PREVIEWS
                  </div>
                  <div className='text-xl font-bold'>
                    45
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/4'>
            <div className='widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='text-xs uppercase font-light text-gray-500'>
                    Links
                  </div>
                  <div className='text-xl font-bold'>
                    4078
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/4'>
            <div className='widget w-full p-4 rounded-lg bg-white border border-gray-100 dark:bg-gray-900 dark:border-gray-800'>
              <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-col'>
                  <div className='text-xs uppercase font-light text-gray-500'>
                    Watch Time
                  </div>
                  <div className='text-xl font-bold'>
                    31h 2m
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
