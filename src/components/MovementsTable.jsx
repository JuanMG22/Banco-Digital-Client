import Movement from '../components/Movement'

const MovementsTable = ({ movementsData }) => {
  return (
    <table className='min-w-full leading-normal'>
      {movementsData.length > 0 &&
        <>
          <thead>
            <tr>
              <th
                className='px-5 py-3 border-b-2  bg-blue-600 text-left text-xs font-semibold text-white  tracking-wider'
              >
                Fecha
              </th>
              <th
                className='px-5 py-3 border-b-2  bg-blue-600 text-left text-xs font-semibold text-white  tracking-wider'
              >
                Descripción
              </th>
              <th
                className='px-5 py-3 border-b-2  bg-blue-600 text-left text-xs font-semibold text-white  tracking-wider'
              >
                Monto
              </th>
              <th
                className='px-5 py-3 border-b-2  bg-blue-600 text-left text-xs font-semibold text-white  tracking-wider'
              >
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {movementsData.map(movement => (
              <Movement
                key={movement.id}
                date={movement.date}
                description={movement.description}
                amount={movement.amount}
              />
            ))}
          </tbody>
        </>}
    </table>
  )
}

export default MovementsTable
