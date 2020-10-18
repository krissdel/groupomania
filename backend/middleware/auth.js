require("dotenv").config();  //charge les variables d'environnement à partir d'un .env fichier dans process.env
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN
  


// -----[ protége les routes et vérifie que l'utilisateur est authentifié avant d'autoriser l'envoi des requêtes. ]------------------------------------------------------------------------------------
module.exports = (req, res, next) => {

  console.log(111111111111111111111);
  try {

    const token = req.headers.authorization.split(' ')[1];
    console.log(22222222222222222);

    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
    console.log(decodedToken);

    console.log(3333333333333333333);

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

// ===================================================

// module.exports = (req, res, next) => {
//   try {
//     try {
//       const token = req.headers.authorization.split(' ')[1];
//       if(!token) return res.status(400).send('Accès refusé !');

//       const verified = jwt.verify(token);

//       if (!verified.userId) return res.status(401).send('Token invalid !');
      
//       req.userId = verified.userId;
     // // req.isAdmin = verified.isAdmin;
//       next();
//   } catch {
//       res.status(401).json({ error: 'Accès refusé ! (InvalideToken)' });
//   }
    
// };
  
