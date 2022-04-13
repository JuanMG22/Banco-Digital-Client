import React from 'react'
import TitleHome from '../components/TitleHome'
import SubTitleHome from '../components/SubTitleHome'
import home from '../img/home-user.jpg'
import Cards from '../components/Cards'

const Home = () => {
  return (
    <section className='mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 justify-center py-16'>
        <div className='col-span-1 row-span-1 lg:mt-10 pl-10'><TitleHome>Bienvenido a tu banco </TitleHome></div>

        <div className='col-span-1 row-start-2 pl-10'><SubTitleHome>Revisa aqui toda la información de tu cuenta </SubTitleHome></div>

        <div className='md:row-start-1 row-end-4'>
          <img className='min-w-full md:min-w-0 my-6 lg:min-h-full max-w-xl' src={home} alt='home_user' />
        </div>

      </div>
      <Cards />

    </section>
  )
}

export default Home
