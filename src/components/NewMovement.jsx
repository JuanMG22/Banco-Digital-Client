import FormTitle from './FormTitle'
import NewMovementForm from './NewMovementForm'

const NewMovement = () => {
  return (
    <section className='flex justify-center'>
      <div className='bg-white shadow-gray-600 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10 mt-32'>
        <FormTitle
          to='/'
          title='Crea un nuevo movimiento'
          linkText='Volver'
        />
        <NewMovementForm />
      </div>
    </section>
  )
}

export default NewMovement
