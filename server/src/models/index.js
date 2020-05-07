const fs = module.require('fs')
const path = module.require('path')
const Sequelize = module.require('sequelize')
const config = module.require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter((file) => {
    return file !== 'index.js'
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    console.log(model)
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
