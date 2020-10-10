// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
const Sequelize = require('sequelize')


 
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {

    lastName: {type: DataTypes.STRING},
    firstName: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true },
    password: {type: DataTypes.STRING},

    });
    
    return User;

  };

