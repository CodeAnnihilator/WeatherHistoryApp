import express from 'express'
import temperature from '../data/temperature.json'

const router = express.Router()

router.get('/temperature/', function(req, res) {
  res.json(temperature)
})

export default router