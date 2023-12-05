const mongoose = require('mongoose')
const { body } = require('express-validator')

const landingSchema = new mongoose.Schema({
  name: { type: String },
  id: { type: Number },
  nametype: { type: String },
  recclass: { type: String },
  mass: { type: Number },
  fall: { type: String },
  year: { type: Number },
  reclat: { type: Number },
  reclong: { type: Number },
  geolocation: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
})
const Landing = mongoose.model('Landing', landingSchema)

const landingValidation = [
  body('name').notEmpty().isString().withMessage('fallo en el nombre'),
  body('id').notEmpty().isNumeric().withMessage('fallo en el id'),
  body('nametype').notEmpty().isString().withMessage('fallo en el nametype'),
  body('recclass').notEmpty().isString().withMessage('fallo en el recclass'),
  body('mass').notEmpty().isNumeric().withMessage('fallo en el mass'),
  body('fall').notEmpty().isString().withMessage('fallo en el fall'),
  body('year').notEmpty().isNumeric().withMessage('fallo en el year'),
  body('reclat').notEmpty().isNumeric().withMessage('fallo en el reclat'),
  body('reclong').notEmpty().isNumeric().withMessage('fallo en el reclong'),
  body('geolocation')
    .notEmpty()
    .isObject()
    .withMessage('fallo en el geolocation'),
  body('geolocation.latitude')
    .notEmpty()
    .isNumeric()
    .withMessage('fallo en el latitude'),
  body('geolocation.longitude')
    .notEmpty()
    .isNumeric()
    .withMessage('fallo en el longitude'),
]

exports.Landing = Landing
exports.landingValidation = landingValidation
