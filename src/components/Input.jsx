const Input = ({ type, id }) => {
  return (
    <input
      aria-labelledby={type}
      id={id}
      type={type}
      className='bg-gray-50 border rounded.lg  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2'
    />
  )
}

export default Input
