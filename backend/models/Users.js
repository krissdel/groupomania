const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');



 
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {

      last_name: {type: DataTypes.STRING},
    first_name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true },
    password: {type: DataTypes.STRING},

    });
    return Users;
  };

