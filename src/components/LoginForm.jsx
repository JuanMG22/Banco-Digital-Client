import axios from 'axios'
import { MdOutlineVisibility } from 'react-icons/md'
import { useContext } from 'react'
import Btn from './Btn'
import Input from './Input'
import Label from './Label'
import LoginTitle from './LoginTitle'
import { userContext } from '../context/UserProvider'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const { signIn } = useContext(userContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    axios
      .post('https://banco-digital-nc.herokuapp.com/login', { email, password })
      .then(response => {
        console.log(response.data)
        const tokenRecibido = response.data.token
        localStorage.setItem('token', tokenRecibido)
        signIn()
        navigate('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <form method='POST' onSubmit={handleSubmit}>
      <LoginTitle />
      <Label to='email' text='Email' />
      <Input type='email' id='email' name='email' />
      <div className='mt-6 w-full'>
        <Label to='pass' text='Password' />
        <div className='relative flex items-center justify-center'>
          <Input type='password' id='pass' name='password' />
          <div className='absolute right-0 mt-2 mr-3 cursor-pointer'>
            <MdOutlineVisibility />
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <Btn type='submit'>
          Iniciar
        </Btn>
      </div>
    </form>
  )
}

export default LoginForm
