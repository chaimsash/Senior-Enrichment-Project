const Sequelize = require('sequelize')
const db = require('../index.js')


module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});
 
