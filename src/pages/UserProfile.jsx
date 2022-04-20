import React from 'react'
import BoxProfile from '../components/BoxProfile'
import ProfileForm from '../components/ProfileForm'

function UserProfile () {
  return (
    <section className='h-[50rem] flex justify-evenly items-center'>
      <div className='border-b-2 block md:flex'>
        <BoxProfile />
        <ProfileForm />
      </div>
    </section>
  )
}

export default UserProfile
