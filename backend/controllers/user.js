require("dotenv").config(); //charge les variables d'environnement à partir d'un .env fichier dans process.env
const bcrypt = require('bcrypt');  //stock le mot de passe sécurisé sous forme de hash
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN
const user = require('../models/user');

// -----[enregistrement d'un utilisateur]-------------------------------------------------------------------
exports.signup = async (req, res) => {
  try {

    const alreadyExist = await user.alreadyExist(req.body.email);
    if (alreadyExist.data.length > 0) {
      res.status(500).json({ error: "l'utilisateur existe déjà !" });
      console.log('utilisateur existe déjà');
      return
    }
    const hash = await bcrypt.hash(req.body.password, 10); // [10 est le salt (10 tours)]
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
        "user_id": answer.data.insertId,
        "jwt": token,
        "last_name": req.body.last_name,
        "role": 0,
        "email": req.body.email,
        "message": "Utilisateur créé !",

      });
    }
    else throw ("oulàlà c'est le drame");
  }
  catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

// -----[connection d'un utilisateur ]-----------------------------------------------------------------------
exports.login = async (req, res) => {
  try {
    const alreadyExist = await user.alreadyExist(req.body.email);
    if (!alreadyExist.data.length > 0) {
      throw ("utilisateur n'existe pas !");
    }
    if (alreadyExist.succeed) {
      const token = jwt.sign(
        { userId: alreadyExist.data[0].id },
        process.env.JWT_KEY,
        { expiresIn: "24h" },
      );
      return res.status(200).json({
        "first_name": alreadyExist.data[0].first_name,
        "user_id"   : alreadyExist.data[0].id,
        "jwt"       : token,
        "last_name" : alreadyExist.data[0].last_name,
        "role"      : alreadyExist.data[0].role,
        "email"     : alreadyExist.data[0].email,
        "message"   : "welcome user !",
      });
    }
  }
  catch (error) {
    return res.status(401).json(error);
  };
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
