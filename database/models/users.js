
module.exports = (sequelize, DataTypes) => {

  let users = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return users;
};
