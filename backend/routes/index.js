import { Router } from 'express'
import bookingsRoutes from './bookings.js'
import buildingsRoutes from './buildings.js'
import availabilityRoutes from './availability.js'
import analyticsRoutes from './analytics.js'

const router = Router()

router.use('/bookings', bookingsRoutes)
router.use('/buildings', buildingsRoutes)
router.use('/availability', availabilityRoutes)
router.use('/analytics', analyticsRoutes)

export default router
