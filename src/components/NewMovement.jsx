import FormTitle from './FormTitle'
import NewMovementForm from './NewMovementForm'

const NewMovement = ({ showForm, updateMovements }) => {
  return (
    <section className='flex justify-center'>
      <div className='bg-white shadow-gray-600 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10 mt-32'>
        <FormTitle
          to='/movimientos'
          title='Crea un nuevo movimiento'
          linkText='Volver'
        />
        <NewMovementForm showForm={showForm} updateMovements={updateMovements} />
      </div>
    </section>
  )
}

export default NewMovement
