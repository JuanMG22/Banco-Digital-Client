import { useEffect, useState, useContext } from 'react'
import Helmet from 'react-helmet'
import { Navigate } from 'react-router-dom'
import Loader from '../components/Loader'
import MovementsLoaded from '../components/MovementsLoaded'
import { userContext } from '../context/UserProvider'

import userService from '../services/userService'

const MovementsPage = () => {
  const [movementsData, setMovementsData] = useState([])
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState(false)

  const showForm = () => setForm(true)
  const { token } = useContext(userContext)

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userService
      .getUser(userId)
      .then(res => {
        setMovementsData(res.movements)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [movementsData])
  return (
    <>
      <Helmet>
        <title>Banco Digital - Movimientos</title>
      </Helmet>
      {!token && <Navigate to='/' />}
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
