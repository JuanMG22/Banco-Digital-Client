import FormTitle from './FormTitle'
import NewMovementForm from './NewMovementForm'

const ProfileEdit = ({ showForm }) => {
  const goBack = () => window.location.reload()
  return (
    <div className=' bg-white shadow-gray-600 shadow-lg rounded lg:w-1/3  md:w-1/2 p-10'>
      <FormTitle
        to='/profile'
        title='Edita tus datos'
        linkText='Volver'
        click={goBack}
      />
      <NewMovementForm />
    </div>
  )
}

export default ProfileEdit
