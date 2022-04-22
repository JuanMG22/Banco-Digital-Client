import { useState } from 'react'
import Btn from './Btn'
import MovementsFilter from './MovementsFilter'
import MovementsTable from './MovementsTable'
import NewMovement from './NewMovement'
import NotMovements from './NotMovements'

const MovementsLoaded = ({ form, movementsData, showForm, updateMovements }) => {
  const [searchData, setSearchData] = useState('')

  const handleSearchChange = (e) => {
    setSearchData(e.target.value)
  }

  const filtroBusqueda =
    movementsData && searchData
      ? movementsData.filter((item) =>
          item.description.toLowerCase().includes(searchData.toLowerCase())
        )
      : movementsData
  return (
    <section className='antialiased font-sans my-6 mx-6 min-h-[35.8rem] mt-20 md:mt-0'>
      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          {form && (<NewMovement showForm={showForm} updateMovements={updateMovements} />)}
          {!form && (
            <>
              <div>
                <h2 className='text-2xl font-semibold leading-tight text-gray-600'>
                  Todos los movimientos ({movementsData.length})
                </h2>
              </div>
              <MovementsFilter
                handleSearchChange={handleSearchChange}
              />
              <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                  <MovementsTable movementsData={filtroBusqueda} />
                  <div
                    className='px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          '
                  >
                    {movementsData.length === 0 &&
                      <NotMovements text='No hay movimientos aún' />}
                    {filtroBusqueda.length === 0 &&
                      <NotMovements text='No se ha encontrado ningún movimiento' />}

                    <Btn click={showForm}>
                      Nuevo Movimiento
                    </Btn>
                  </div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>

    </section>
  )
}

export default MovementsLoaded
