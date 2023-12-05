const { landingValidation } = require('../models/landing')
const landingController = require('../controllers/landings')
// const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParams')
// const validate = require('../middlewares/validate')

// const auth = require('../middlewares/auth')
// const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

const { query } = require('express-validator')

router.get(
  '/',
  landingValidation,
  query('minimum_mass').isIn('mass'),
  landingController.getDifferents
)
router.get(
  '/mass/:mass',
  // auth,
  // validate,
  landingValidation,
  landingController.getByMass
)
router.get(
  '/class/:recclass',
  // auth,
  // validate,
  landingValidation,
  landingController.getByClass
)

router.post('/create', landingValidation, landingController.create)
router.put(
  '/edit/:landingId',
  // auth,
  // admin,
  // mongoIdFromParamValidation('landingId'),
  // validate,
  landingValidation,
  landingController.update
)
router.delete(
  '/delete/:landingId',
  // auth,
  // admin,
  // mongoIdFromParamValidation('landingId'),
  // validate,
  landingController.remove
)

module.exports = router
