
module.exports = (sequelize, DataTypes) => {

  let users = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  });

  return users;
};
