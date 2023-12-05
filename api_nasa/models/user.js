const mongoose = require('mongoose')
const { body } = require('express-validator')

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickname: { type: String },
  email: { type: String },
  picture: { type: String },
  affiliatedNumber: { type: Number, required: true, unique: true },
  affiliationDate: { type: Date },
  occupation: { type: String },
  birthdate: { type: Date },
  neasDiscovered: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Nea ' }],
})

const User = mongoose.model('User', userSchema)

const userValidation = [
  body('username').notEmpty().isString().exists(),
  body('nickname').notEmpty().isString(),
  body('email').isEmail().notEmpty(),
  body('picture').notEmpty().isString(),
  body('affiliatedNumber').notEmpty().isNumeric(),
  body('affiliationDate').notEmpty().isISO8601('yyyy-mm-dd'),
  body('occupation').notEmpty().isString(),
  body('birthdate').notEmpty().isISO8601('yyyy-mm-dd'),
  body('neasDiscovered').notEmpty().isArray(),
]

exports.User = User
exports.userValidation = userValidation
