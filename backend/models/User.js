// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');
// const Sequelize = require('sequelize')



// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define('User', {

//     lastName: {type: DataTypes.STRING},
//     firstName: {type: DataTypes.STRING},
//     email: {type: DataTypes.STRING, unique: true },
//     password: {type: DataTypes.STRING},

//     });

//     return User;

//   };



// ===========================================================

// 'use strict';
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('sqlite::memory:');

// module.exports = (sequelize, DataTypes) => {

//   const User = sequelize.define('User', {

//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },

//     // { 
//     //   sequelize, modelName: 'User' 
//     // },
//   });
//   return User;
// };

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true



// ===============================================================

const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


class User extends Model {}
User.init({
  firstName: DataTypes.STRING,
  lasName: DataTypes.STRING,
  email: DataTypes.STRING, allowNull: false, unique: true,
  password: DataTypes.STRING
}, { sequelize, modelName: 'User' });

