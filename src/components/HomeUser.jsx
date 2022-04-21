import React from 'react'
import TitleHome from './TitleHome'
import SubTitleHome from './SubTitleHome'
import home from '../img/home-user.jpg'
import Cards from './Cards'

function HomeUser () {
  return (
    <section className='mx-auto mt-14 md:mt-0'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-center py-16'>
        <div className='col-span-1 row-span-1 lg:mt-10 xl:pl-10'>
          <TitleHome>
            Bienvenido a tu banco
          </TitleHome>
        </div>

        <div className='col-span-1 row-start-2 xl:pl-10'>
          <SubTitleHome>
            Revisa aqui toda la información de tu cuenta
          </SubTitleHome>
        </div>

        <div className='md:row-start-1 row-end-4 mx-6'>
          <img className='mx-auto max-w-[18] mt-12 lg:mt-12 lg:min-h-fit lg:max-w-full' src={home} alt='home_user' />
        </div>

      </div>
      <Cards />

    </section>
  )
}

export default HomeUser
