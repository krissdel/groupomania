const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

// class User extends Model {}
// User.init({
//   username: DataTypes.STRING,
//   birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

 
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {

    // id: {type: DataTypes.STRING, allowNull: true},
    last_name: {type: DataTypes.STRING, allowNull: true},
    first_name: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, allowNull: true, unique: true },
    password: {type: DataTypes.STRING, allowNull: true},

    });
    return Users;
  };

