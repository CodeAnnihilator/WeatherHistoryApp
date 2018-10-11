import express from 'express'
import precipitation from '../data/precipitation.json'

const router = express.Router()

router.get('/precipitation/', function(req, res) {
  res.json(precipitation)
})

export default router