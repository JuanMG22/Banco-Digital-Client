
const LoginWithBtn = ({ children, text }) => {
  return (
    <button
      aria-label={text}
      className='focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-5'
    >
      {children}
      <p className='text-base font-medium ml-4 text-gray-700'>
        {text}
      </p>
    </button>
  )
}

export default LoginWithBtn
