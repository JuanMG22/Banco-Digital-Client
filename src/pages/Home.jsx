import React from 'react'
import homeImg from '../img/home-image.jpg'
import perfil from '../img/perfil.png'
import saldo from '../img/saldo.png'
import movimientos from '../img/movimientos.png'
import { Link } from 'react-router-dom'

const Home = () => {
  const token = localStorage.getItem('token')

  const visible = token ? 'flex' : 'hidden'
  return (
    <div className={`${visible} flex-col mt-[8rem] h-[40rem] justify-center items-center`}>
      <img src={homeImg} alt='' className={`w-[80rem] ${visible}`} />
      <div className='flex w-[70rem] justify-evenly mt-5'>
        <Link to='/perfil'>
          <img src={perfil} alt='' className={`w-[18rem] ${visible}`} />
        </Link>
        <Link to='/movimientos'>
          <img src={movimientos} alt='' className={`w-[18rem] ${visible}`} />
        </Link>
        <Link to='/user'>
          <img src={saldo} alt='' className={`w-[18rem] ${visible}`} />
        </Link>
      </div>
    </div>
  )
}

export default Home
