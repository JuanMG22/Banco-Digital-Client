import saldo from '../img/saldo-01.jpg'

const UserPageLoaded = ({ balance }) => {
  return (
    <section className='flex flex-col lg:flex-row justify-evenly  items-center h-[50rem] gap-x-3'>
      <div className='pl-6 pt-6'>
        <div className='w-96 h-90 bg-white border-2 border-gray-300 p-6 rounded-xl tracking-wide shadow-lg'>
          <div className='mb-4 divide-y divide-slate-700 '>
            <h2 className='text-center font-semibold text-2xl text-blue-600 py-5'>
              Su saldo es
            </h2>
            <div className='leading-5 sm divide-y'>
              <h4 className='font-semibold text-center text-3xl text-gray-600 py-5'>$ {balance}</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className='min-h-full max-w-xl' src={saldo} alt='saldo' />
      </div>
    </section>
  )
}

export default UserPageLoaded
