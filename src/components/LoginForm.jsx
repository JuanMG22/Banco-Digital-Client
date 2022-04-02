import { MdOutlineVisibility } from 'react-icons/md'
import Btn from './Btn'
import Input from './Input'
import Label from './Label'
import LoginTitle from './LoginTitle'

const LoginForm = () => {
  return (
    <form>
      <LoginTitle />
      <Label to='email' text='Email' />
      <Input type='email' id='email' />
      <div className='mt-6 w-full'>
        <Label to='pass' text='Password' />
        <div className='relative flex items-center justify-center'>
          <Input type='password' id='pass' />
          <div className='absolute right-0 mt-2 mr-3 cursor-pointer'>
            <MdOutlineVisibility />
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <Btn>
          Iniciar
        </Btn>
      </div>
    </form>
  )
}

export default LoginForm
