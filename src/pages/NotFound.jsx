import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import Btn from '../components/Btn'

const NotFound = () => {
  return (
    <>
      <Helmet>
        <meta name='description' content='Banco Digital, tu cuenta digital práctica y sin costos. Registrate' />
        <meta name='keywords' content='banco, finanzas, dinero' />
        <meta property='og:title' content='Banco Digital' />
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164337251-a9f6f58a-0eaa-4ec6-a420-9cc43d53c688.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/' />
        <meta property='og:type' content='fintech' />
        <title>Banco Digital - Error 404 </title>
      </Helmet>
      <section className='mt-14 md:mt-0 h-[38.8rem] w-full flex flex-col justify-center items-center bg-white'>
        <h1 className='text-9xl font-extrabold text-blue-700 tracking-widest'>404</h1>
        <div className='bg-blue-600 px-2 text-sm rounded rotate-12 absolute text-white'>
          Página no ecntrontrada
        </div>
        <button className='mt-5'>

          <Link to='/' className='relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none'>
            <span
              className='absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5  group-hover:translate-y-0 group-hover:translate-x-0'
            />
            <Btn>
              Volver
            </Btn>

          </Link>
        </button>

      </section>
    </>
  )
}

export default NotFound
