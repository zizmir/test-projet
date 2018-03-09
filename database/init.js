const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');

let db = {};

db.sequelize = new Sequelize('test-projet', 'okuvrkasatqueh', 'd5ed222042891cb53aa87d46289af3793a629c91f79bddccf2315c67642506f6', {
  host: 'ec2-79-125-12-27.eu-west-1.compute.amazonaws.com', dialect: 'postgres'
});

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
