import express from 'express'
import api from './api'

const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use('/api', api)

const HOST = 'localhost'
const PORT = 8000

app.listen(PORT, function() {
  console.log("Api server listening at http://%s:%s", HOST, PORT)
})