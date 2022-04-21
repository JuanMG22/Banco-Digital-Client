import React from 'react'

function Btn ({ children, type, click, btnType }) {
  let estilos = ''

  if (btnType === 'btnHome') {
    estilos = 'md:ml-5 shadow-sm shadow-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  font-bold leading-none text-white focus:outline-none bg-blue-600 border rounded-md hover:bg-blue-500 py-3 px-3 w-36 text-xl transition-all duration-200'
  } else if (btnType === 'btnSm') {
    estilos = 'shadow-sm shadow-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  font-bold leading-none text-white focus:outline-none bg-blue-600 border rounded-md hover:bg-blue-500 py-3 px-3 w-36 text-xl transition-all duration-200'
  } else if (btnType === 'btnEdit') {
    estilos = 'text-center shadow-sm shadow-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  font-bold leading-none text-white focus:outline-none bg-blue-600 border rounded-md hover:bg-blue-500 py-2 px-2 text-sm transition-all duration-200'
  } else {
    estilos = 'shadow-sm shadow-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700  font-bold leading-none text-white focus:outline-none bg-blue-600 border rounded hover:bg-blue-500 py-3 px-3 h-full w-full text-2xl transition-all duration-200'
  }
  return (
    <div className='mt-8'>
      <button
        type={type}
        onClick={click}
        className={estilos}
      >
        {children}
      </button>
    </div>
  )
}

export default Btn
