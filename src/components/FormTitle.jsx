import { Link } from 'react-router-dom'

const FormTitle = ({ title, text, to, linkText, click }) => {
  return (
    <>
      <h2
        tabIndex='0'
        className='focus:outline-none text-2xl font-extrabold leading-6 text-gray-800'
      >
        {title}
      </h2>
      <p
        tabIndex='0'
        className='focus:outline-none text-sm mt-4 mb-4 font-medium leading-none text-gray-500'
      >
        {text}
        <Link
          onClick={click}
          to={to}
          className='mx-2 hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer'
        >
          {linkText}
        </Link>
      </p>
    </>
  )
}

export default FormTitle
