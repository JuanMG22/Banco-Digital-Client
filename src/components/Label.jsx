const Label = ({ text, to }) => {
  return (
    <label
      htmlFor={to}
      className='text-sm font-medium leading-none text-gray-800'
    >
      {text}
    </label>
  )
}

export default Label
