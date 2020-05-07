module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: dataTypes.STRING,
      unique: true
    },
    password: dataTypes.STRING
  })
  return User
}
