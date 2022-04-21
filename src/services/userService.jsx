import axios from 'axios'
const baseUrl = 'https://banco-digital-nc.herokuapp.com'

const userLogin = (userData) => {
  const request = axios.post(`${baseUrl}/login`, userData)

  return request
    .then(response => {
      const tokenRecibido = response.data.token
      const userId = response.data.id
      localStorage.setItem('token', tokenRecibido)
      localStorage.setItem('userId', userId)
    })
}

const userRegister = (userData) => {
  const request = axios.post(`${baseUrl}/register`, userData)
  return request.then(response => response.data)
}

const getUser = (userId) => {
  const request = axios.get(`${baseUrl}/users/${userId}`)
  return request.then(response => response.data)
}
const editUser = (userId, userData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.put(`${baseUrl}/users/${userId}`, userData, config)
  return request.then(response => response.data)
}

const NewMovement = (movementData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const request = axios.post(`${baseUrl}/movements`, movementData, config)
  return request.then(response => response.data)
}

export default { userLogin, userRegister, getUser, NewMovement, editUser }
