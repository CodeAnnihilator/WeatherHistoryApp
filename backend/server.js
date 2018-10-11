import express from 'express'
import api from './api'

const app = express()

app.use('/api', api)

const HOST = '0.0.0.0'
const PORT = 8000

app.listen(PORT, function() {
  console.log("Api server listening at http://%s:%s", HOST, PORT)
})