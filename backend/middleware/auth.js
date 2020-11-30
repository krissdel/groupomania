require("dotenv").config();  //charge les variables d'environnement à partir d'un .env fichier dans process.env
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN
const userModel = require('../models/user');
const bcrypt = require('bcrypt');  //stock le mot de passe sécurisé sous forme de hash

function checkById(req) {
  const token = req.headers.authorization;
  if (!token) return false;
  const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  if (!decodedToken) return false;
  if (decodedToken.userId !== Number(req.body.id)) return false;
  return true;
}

async function checkByPassword(email, pwd) {
  const answer = await userModel.login(email);
  return await bcrypt.compare(pwd, answer.data[0].password);
}

// -----[ protége les routes et vérifie que l'utilisateur est authentifié avant d'autoriser l'envoi des requêtes. ]------------------------------------------------------------------------------------
module.exports = async (req, res, next) => {
  try {
    const result = req.body.password === undefined ? checkById(req) : await checkByPassword( req.body.email, req.body.password);
    if (!result) return res.status(401).send('Accès refusé !');
    next();
  } catch {
    res.status(401).json({ error: Error || 'Invalid request!' })
  }
};



