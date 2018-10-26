import axios from 'axios'

import { backendURI } from 'app/config/main'

console.log(process.env.NODE_ENV)

export const fetch = axios.create({
  baseURL: backendURI
})

fetch.interceptors.response.use((response) => {
  return response
}, function (error) {
  return Promise.reject(error.response)
})
