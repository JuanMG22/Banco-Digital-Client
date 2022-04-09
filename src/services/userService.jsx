import axios from 'axios'
const baseUrl = 'https://banco-digital-nc.herokuapp.com'

const userLogin = (userData) => {
  const request = axios.post(`${baseUrl}/login`, userData)

  return request
    .then(response => {
      const tokenRecibido = response.data.token
      localStorage.setItem('token', tokenRecibido)
    })
}

const userRegister = (userData) => {
  const request = axios.post(`${baseUrl}/register`, userData)
  return request.then(response => response.data)
}

export default { userLogin, userRegister }
