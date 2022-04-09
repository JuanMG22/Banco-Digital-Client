const Label = ({ text, to }) => {
  return (
    <div className='mt-5 w-full'>
      <label
        htmlFor={to}
        className='text-sm font-medium leading-none text-gray-800 mt-6'
      >
        {text}
      </label>
    </div>
  )
}

export default Label
