
// -----[ indique le type et le caractère des champs souhaités]-----------------------------------------------

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Articles = sequelize.define('Articles', {
  // Model attributes are defined here
    userId: {type: DataTypes.STRING,allowNull: true},
    title: {type: DataTypes.STRING,allowNull: true},
    imageUrl: {type: DataTypes.STRING,allowNull: true},
    content: {type: DataTypes.STRING,allowNull: true},
    date_creation: {type: DataTypes.STRING,allowNull: true},

    likes: {type: DataTypes.Number,allowNull: 0},
    dislikes: { type: DataTypes.Number,allowNull: 0 },
    usersLiked: { type: DataTypes.Number,allowNull: []},
    usersDisliked: { type: DataTypes.Number,allowNull: [] },

});


// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

















// const articles = new Schema({
//     userId: {type: String, required: true},
//     name: {type: String, required: true},
//     imageUrl: {type: String, required: true},
    
//     likes: { type: Number, default: 0 },
    // dislikes: { type: Number, default: 0 },
    // usersLiked: { type: [String], default: [] },
    // usersDisliked: { type: [String], default: [] },
// });

// module.exports = sequelize