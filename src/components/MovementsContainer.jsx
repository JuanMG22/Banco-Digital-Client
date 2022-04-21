import Btn from './Btn'
import MovementsTable from './MovementsTable'

const MovementsContainer = ({ data, showForm }) => {
  return (
    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
      <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
        <MovementsTable movementsData={data} />
        <div
          className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          '
        >
          <Btn click={showForm}>
            Nuevo Movimiento
          </Btn>
          <span className='text-xs xs:text-sm text-gray-700 mt-5'>
            Showing 1 to 4 of 50 Entries
          </span>
          <div className='inline-flex mt-2 xs:mt-0'>
            <button
              className='text-sm bg-blue-600 hover:bg-blue-500 text-gray-100 font-semibold py-2 px-4 rounded-l'
            >
              Prev
            </button>
            <button
              className='text-sm bg-blue-600 hover:bg-blue-500 text-gray-100 font-semibold py-2 px-4 rounded-r'
            >
              Next
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MovementsContainer
