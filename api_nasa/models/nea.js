const mongoose = require('mongoose')
const { body } = require('express-validator')

const neaSchema = new mongoose.Schema({
  designation: { type: String },
  discovery_date: { type: Date },
  h_mag: { type: Number },
  moid_au: { type: Number },
  q_au_1: { type: Number },
  q_au_2: { type: Number },
  period_yr: { type: Number },
  i_deg: { type: Number },
  pha: { type: String },
  orbit_class: { type: String },
})

const Nea = mongoose.model('Nea', neaSchema)

const neaValidation = [
  body('designation').notEmpty().isString(),
  body('discovery_date').notEmpty().isISO8601('yyyy-mm-dd'),
  body('h_mag').notEmpty(),
  body('moid_au').notEmpty().isNumeric(),
  body('q_au_1').notEmpty().isNumeric(),
  body('q_au_2').notEmpty().isNumeric(),
  body('period_yr').notEmpty().isNumeric(),
  body('i_deg').notEmpty().isNumeric(),
  body('pha').notEmpty().isString(),
  body('orbit_class').notEmpty().isString(),
]

exports.Nea = Nea
exports.neaValidation = neaValidation
