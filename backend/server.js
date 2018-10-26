import express from 'express'
import api from './api'

const app = express()

var port = process.env.PORT || 8000
var host = process.env.HOST || 'localhost'

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', `*`)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})

app.use('/api', api)

app.listen(port, function() {
  console.log("Api server listening at http://%s:%s", host, port)
})