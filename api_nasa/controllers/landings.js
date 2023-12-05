const { Landing } = require('../models/landing')

const getDifferents = async (req, res) => {
  const minimum_mass = parseFloat(req.query.minimum_mass)

  const { from = 0, to = 9999 } = req.query

  // const query = {}

  // if (minimum_mass) query.mass = { $gte: minimum_mass }

  // console.log('query', query)

  const landings = await Landing.find()

  if (minimum_mass) {
    const mapLandings = landings.map((landing) => ({
      name: landing.name,
      mass: landing.mass,
    }))

    const result = mapLandings.filter((landing) => landing.mass > minimum_mass)

    console.log()

    res.json(result)
  }

  if (from || to) {
    const mapLandings = landings.map((landing) => ({
      name: landing.name,
      mass: landing.mass,
      year: landing.year,
    }))

    const result = mapLandings.filter((landing) => {
      console.log(landing.year)
      return landing.year > parseFloat(from) && landing.year <= parseFloat(to)
    })

    res.json(result)
  }
}

const getByMass = async (req, res) => {
  const landing = await Landing.find()

  const masa = parseFloat(req.params.mass)

  const result = landing.filter((land) => land.mass === masa)

  res.json(result)
}

const getByClass = async (req, res) => {
  const landing = await Landing.find()

  const clase = req.params.recclass

  const result = landing
    .filter((land) => land.recclass === clase)
    .map((land) => ({
      name: land.name,
      recclass: land.recclass,
    }))

  res.json(result)
}

const create = async (req, res) => {
  console.log()
  const newLanding = await Landing.create(req.body)

  res.json(newLanding)
}

const update = async (req, res) => {
  const landing = await Landing.findOneAndUpdate(
    { id: req.params.landingId },
    req.body,
    {
      new: true,
    }
  )

  res.json(landing)
}

const remove = async (req, res) => {
  const landing = await Landing.findOneAndDelete({ id: req.params.landingId })

  res.json(landing)
}

module.exports = {
  getDifferents,
  getByMass,
  getByClass,
  create,
  update,
  remove,
}
