import { FcGoogle } from 'react-icons/fc'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import LoginWithBtn from '../components/LoginWithBtn'

const LoginWithList = () => {
  return (
    <>
      <LoginWithBtn text='Ingresa con Google'>
        <FcGoogle className='text-2xl' />
      </LoginWithBtn>
      <LoginWithBtn text='Ingresa con Facebook'>
        <FaFacebookSquare className='text-2xl text-[#4267B2]' />
      </LoginWithBtn>
      <LoginWithBtn text='Ingresa con Facebook'>
        <FaTwitter className='text-2xl text-[#1DA1F2]' />
      </LoginWithBtn>
    </>
  )
}

export default LoginWithList
