const { Nea } = require('../models/nea')

const getAll = async (req, res) => {
  const neas = await Nea.find()
    .populate({ path: 'podium.first_position', select: 'name' })
    .populate({ path: 'podium.second_position', select: 'name' })
    .populate({ path: 'podium.third_position', select: 'name' })

  res.json(neas)
}

const getById = async (req, res) => {
  const nea = await Nea.findById(req.params.neaId)
    .populate({ path: 'podium.first_position', select: 'name' })
    .populate({ path: 'podium.second_position', select: 'name' })
    .populate({ path: 'podium.third_position', select: 'name' })

  res.json(nea)
}

const create = async (req, res) => {
  const newNea = await Nea.create(req.body)

  res.json(newNea)
}

const update = async (req, res) => {
  const nea = await Nea.findByIdAndUpdate(req.params.neaId, req.body, {
    new: true,
  })

  res.json(nea)
}

const remove = async (req, res) => {
  const nea = await Nea.findByIdAndDelete(req.params.neaId)

  res.json(nea)
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
}
