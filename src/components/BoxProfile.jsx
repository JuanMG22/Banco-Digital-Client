import React from 'react'

function BoxProfile () {
  return (

    <div className='w-full md:w-2/5 p-4 sm:p-6 lg:p-8 bg-white shadow-md'>
      <div className='flex justify-between'>
        <div className='w-full p-8 mx-2 flex justify-center'>
          <img id='showImage' className='max-w-xs items-center w-full h-full rounded-full border' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' alt='' />
        </div>
        <span className='text-xl font-semibold block'>Admin Profile</span>
        <a href='#' className='-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800'>Edit</a>
      </div>

      <span className='text-gray-600'>Esta información es secreta así que ten cuidado.</span>
    </div>
  )
}

export default BoxProfile
