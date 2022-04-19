import React from 'react'
import TitleHome from './TitleHome'
import SubTitleHome from './SubTitleHome'
import home from '../img/home-01.jpg'
import StepsHome from './StepsHome'
import BtnSm from './BtnSm'
import { Link } from 'react-router-dom'

function HomeNotUser () {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-center py-16'>
        <div className='col-span-1 row-span-1 lg:mt-10 pl-10'><TitleHome>Tu cuenta digital práctica y sin costos</TitleHome></div>

        <div className='col-span-1 row-start-2 pl-10'><SubTitleHome>Unete a Banco Digital </SubTitleHome>
          <Link to='/register'>
            <BtnSm>Registro</BtnSm>
          </Link>
        </div>

        <div className='md:row-start-1 row-end-4'>
          <img className='mx-auto max-w-[20rem] md:min-w-0 my-6 lg:min-h-full lg:max-w-xl' src={home} alt='home' />
        </div>

      </div>
      <StepsHome />

    </section>
  )
}

export default HomeNotUser
