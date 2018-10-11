import express from 'express'
import temperature from './temperature'
import precipitation from './precipitation'

const router = express.Router()

router.use(temperature)
router.use(precipitation)

export default router