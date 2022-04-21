import React from 'react'

function BtnSm ({ children, type, click }) {
  return (
    <div className='mt-8'>
      <button
        type={type}
        onClick={click}
        className='md:ml-5 shadow-sm shadow-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  font-bold leading-none text-white focus:outline-none bg-blue-600 border rounded-md hover:bg-blue-500 py-3 px-3 w-36 text-xl transition-all duration-200'
      >
        {children}
      </button>
    </div>
  )
}

export default BtnSm
