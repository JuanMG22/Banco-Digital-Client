import React from 'react'
import BoxProfile from '../components/BoxProfile'
import ProfileForm from '../components/ProfileForm'

function UserProfile () {
  return (
    <section className='h-full'>
      <h1>Perfil</h1>
      <div className='border-b-2 block md:flex'>
        <BoxProfile />
        <ProfileForm />
      </div>
    </section>
  )
}

export default UserProfile
