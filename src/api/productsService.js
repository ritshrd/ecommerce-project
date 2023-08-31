import axios from 'axios'

const BASE_URL = 'http://localhost:3000'
// const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const listAllProductsService = (dataProducts) => axios.get(`${BASE_URL}/items`, dataProducts)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const getAllUsersService = (jwtToken) => axios.get(`${BASE_URL}/users`, { headers: { authorization: `Bearer ${jwtToken}` } })

export {
  listAllProductsService,
  loginUserService,
  getAllUsersService,
  registerUserService
}
