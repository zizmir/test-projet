const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
require('dotenv').config()

let db = {};
//const pathBase = process.env.DATABASE_URL || 'postgres://bouznir:@localhost:5432/test-projet'
db.sequelize = new Sequelize(process.env.DATABASE_URL);

let model_pathname = path.join(__dirname, 'models');

fs
.readdirSync(model_pathname)
.filter((filename) => {
  return (filename.indexOf(".") !== 0) && (filename !== "init.js");
})
.forEach((filename) => {
  let model = db.sequelize.import(path.join(model_pathname, filename));
  db[model.name] = model;
});

module.exports = db;

/*const Sequelize = require('sequelize')
const path = process.env.DATABASE_URL  'postgres://bouznir@localhost:5432/test-projet'

const sequelize = new Sequelize(path)
const User = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING

})*/