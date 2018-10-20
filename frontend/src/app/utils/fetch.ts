import axios from 'axios'

export const fetch = axios.create({
  baseURL: 'http://localhost:8000/api/'
})

fetch.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error.response)
})
