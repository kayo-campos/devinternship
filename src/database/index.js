const Sequelize = require('sequelize');

const db = {};

// setting connection up
const sequelize = new Sequelize('postgres://postgres:124816@localhost:5432/db_pessoas');

db.Sequelize = Sequelize;
db.sequelize = sequelize
module.exports = db;