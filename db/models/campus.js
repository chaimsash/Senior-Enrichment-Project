const Sequelize = require('sequelize')
const db = require('../index.js')


module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING
  },
  color: {
    type: Sequelize.STRING
  }
});
