require("dotenv").config(); //charge les variables d'environnement à partir d'un .env fichier dans process.env
const bcrypt = require('bcrypt');  //stock le mot de passe sécurisé sous forme de hash
const jwt    = require('jsonwebtoken');  //crée et vérifie les TOKEN
const user   = require('../models/user');

// -----[enregistrement d'un utilisateur]-------------------------------------------------------------------
exports.signup = async (req, res) => {
  try {

    console.log("-1------------------------------", req.body);

    const alreadyExist = await user.alreadyExist(req.body.email);
    console.log("-2-----------------------------")
    if (alreadyExist.data.length > 0) {
      res.status(500).json({ error: "l'utilisateur existe déjà !" });
      console.log('utilisateur existe déjà');
      return
    }
    const hash = await bcrypt.hash(req.body.password, 10); // [10 est le salt (10 tours)]
    console.log("-3-----------------------------");
    const answer = await user.signup({
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      email: req.body.email,
      password: hash,
      admin: 0
    });
    if (answer.succeed) {
      const token = jwt.sign(
        { userId: answer.data.insertId },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
      );
      res.status(201).json({
        "first_name": req.body.first_name,
        "id"        : answer.data.insertId,
        "jwt"       : token,
        "last_name" : req.body.last_name,
        "message"   : "Utilisateur créé !",
        "role"      : 0,
        "email"     : req.body.email,
      });
    } throw("oulàlà c'est le drame");
  }
  catch (error) {
    res.status(500).json({ error: error });
  }
};

// -----[connection d'un utilisateur ]-----------------------------------------------------------------------
exports.login = async (req, res) => {
  try {
    const alreadyExist = await user.alreadyExist(req.body.email);
    if (!alreadyExist.data.length > 0) {
      throw("utilisateur n'existe pas !");
    }
    if (alreadyExist.succeed) {
      const token = jwt.sign(
        { userId: alreadyExist.data[0].id },
        process.env.JWT_KEY,
        { expiresIn: "24h" },
      );      
      return res.status(200).json({ 
        "first_name": alreadyExist.data[0].first_name,
        "id"        : alreadyExist.data[0].id,
        "jwt"       : token,
        "last_name" : alreadyExist.data[0].last_name,
        "role"      : alreadyExist.data[0].role,
        "email"     : alreadyExist.data[0].email,
        "message"   : "welcome user !",
        user: user.id,
        jwt: token,
      });
    }
  }
  catch (error) {
    console.log("controllers/user > login :", error)
    return res.status(401).json(error);
  };
};


// -----[déconnexion d'un utilisateur ]-----------------------------------------------------------------------

exports.logout = async (req, res) => {
  try {
    const currentUser = await User.updateOne({ _id: req.user._id }, { $set: { connected: false } })
      // console.log(req.user._id)
      .then(() => res.status(200).json({ message: ' Utilisateur Déconnecté !' }))
      .catch(error => res.status(400).json({ error }));
  }
  catch {
    (error => res.status(500).json({ error }))
  }
};

// -----[supprimer un utilisateur]-----------------------------------------------------------------------

exports.deleteUser = async (req, res) => {
  try {
    console.log(req.params);
    const answer = await user.delete(req.params.id);
    if (answer.succeed) {
      console.log("controller deleteUser Fin--ok---------------------------")
      res.status(200).json({ message: "user supprimée !" });
    };
  } catch (error) {
    console.log("deleteUser Failed", error);
  }
};
