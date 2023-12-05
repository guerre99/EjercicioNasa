const { neaValidation } = require('../models/nea')
const neaController = require('../controllers/neas')
// const mongoIdFromParamValidation = require('../middlewares/mongoIdFromParams')
// const validate = require('../middlewares/validate')

// const auth = require('../middlewares/auth')
// const admin = require('../middlewares/admin')

const { Router } = require('express')

const router = Router()

router.get('/', neaController.getAll)
router.get(
  '/:neaId',
  mongoIdFromParamValidation('neaId'),
  validate,
  neaController.getById
)
router.post('/', auth, admin, neaValidation, validate, neaController.create)
router.put(
  '/:neaId',
  auth,
  admin,
  mongoIdFromParamValidation('neaId'),
  neaValidation,
  validate,
  neaController.update
)
router.delete(
  '/:neaId',
  auth,
  admin,
  mongoIdFromParamValidation('neaId'),
  validate,
  neaController.remove
)

module.exports = router
