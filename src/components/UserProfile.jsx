import BoxProfile from './BoxProfile'
import ProfileForm from './ProfileForm'
import { useState } from 'react'
import ProfileEdit from './ProfileEdit'

const UserProfile = ({ userData }) => {
  const { name, lastName, email } = userData
  const [editForm, setEditForm] = useState(false)
  const showForm = () => setEditForm(true)

  return (
    <section className='h-[50rem] flex justify-evenly items-center mt-28 md:mt-0'>
      {editForm
        ? <ProfileEdit />
        : (
          <div className='border-b-2 block md:flex'>
            <BoxProfile showForm={showForm} />
            <ProfileForm
              name={name}
              lastName={lastName}
              email={email}
            />
          </div>
          )}

    </section>
  )
}

export default UserProfile
