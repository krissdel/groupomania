
// -----[ indique le type et le caractère des champs souhaités]-----------------------------------------------

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');


module.exports = (sequelize, Datatypes) => {
  const Articles = sequelize.define('Articles', {
      user_Id: {type: DataTypes.INTEGER},
      imageUrl: {type: DataTypes.STRING},
      content: {type: DataTypes.STRING},
      date_creation: {type: DataTypes.STRING,allowNull: true},
  
  })
  return Articles;
};











