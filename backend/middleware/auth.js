require("dotenv").config();  //charge les variables d'environnement à partir d'un .env fichier dans process.env
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN





// -----[ protége les routes et vérifie que l'utilisateur est authentifié avant d'autoriser l'envoi des requêtes. ]------------------------------------------------------------------------------------
module.exports = (req, res, next) => {

  try {
    console.log(6666666666666666666666);
    // const token = req.headers.authorization.split(' ')[0] === 'Bearer'
    const token = req.headers.authorization.split('')[1];
   
      if(!token) return res.status(400).send('Accès refusé !');

    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    if (!decodedToken) return res.status(401).send('Token invalid !');
    console.log(decodedToken);

    req.userId = verified.userId;
    req.dmin = verified.admin;
    next();
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw new Error("ID non valable !");
    } else {
      next();
    }
  } catch {
    res.status(401).json({error: Error || 'Invalid request!'})  
  } 
  
    
};



