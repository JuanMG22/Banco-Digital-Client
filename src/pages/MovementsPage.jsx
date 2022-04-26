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

  const showForm = () => setForm(!form)
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
  }, [])
  return (
    <>
      <Helmet>
        <meta name='description' content='Banco Digital, inicia sesión y disfruta de todos los beneficios que ofrece una banca digital' />
        <meta name='keywords' content='banco, finanzas, dinero, iniciar sesion, login' />
        <meta property='og:title' content='Marty Friedman Website' />
        <meta property='og:image' content='https://user-images.githubusercontent.com/88951217/164756642-56ce78ee-b80f-4b55-ae75-8c690bfc4e55.png' />
        <meta property='og:url' content='https://banco-digital.netlify.app/movimientos' />
        <meta property='og:type' content='fintech' />
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
              updateMovements={setMovementsData}
            />
      }
    </>
  )
}

export default MovementsPage
