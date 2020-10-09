// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');



 
module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {

    lastName: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true },
    password: {type: DataTypes.STRING},

    });
    return Users;
  };

