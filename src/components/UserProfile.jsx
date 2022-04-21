import BoxProfile from './BoxProfile'
import ProfileForm from './ProfileForm'

const UserProfile = ({ userData }) => {
  const { name, lastName, email } = userData
  return (
    <section className='h-[50rem] flex justify-evenly items-center mt-10 lg:mt-0'>
      <div className='border-b-2 block md:flex'>
        <BoxProfile />
        <ProfileForm
          name={name}
          lastName={lastName}
          email={email}
        />
      </div>
    </section>
  )
}

export default UserProfile
