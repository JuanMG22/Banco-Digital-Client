import { useEffect, useState } from 'react'
import Loader from '../components/Loader'
import MovementsLoaded from '../components/MovementsLoaded'

import userService from '../services/userService'

const MovementsPage = () => {
  const [movementsData, setMovementsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(false)

  const showForm = () => setForm(true)

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userService
      .getUser(userId)
      .then(res => {
        setMovementsData(res.movements)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [])
  return (
    <>
      {
        loading
          ? <Loader />
          : <MovementsLoaded
              movementsData={movementsData}
              form={form}
              showForm={showForm}
            />
      }
    </>
  )
}

export default MovementsPage
