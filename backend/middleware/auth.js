require("dotenv").config();  //charge les variables d'environnement à partir d'un .env fichier dans process.env
const jwt = require('jsonwebtoken');  //crée et vérifie les TOKEN
const userModel = require('../models/user');
const bcrypt = require('bcrypt');  //stock le mot de passe sécurisé sous forme de hash

function checkById(userId, answerId){
  if (userId === answerId) return true;
  console.log('-------------------------');
  return false;
}

async function checkByPassword(userId, email, pwd){
  const answer = await userModel.login(email);
  console.log('mmmmmmmmmmmmmmmmmmmmmmmmmm', pwd, answer.data[0].password);
  
  console.log('kkkkkkkkkkkkk', answer) ;
  if (answer.data[0].id !== userId) return false;
  console.log('yyyyyyyyyyyyy', answer.data[0].id, userId);
  const valid = await bcrypt.compare(pwd, answer.data[0].password);
  console.log(';;;;;;;;;;;;;;', pwd,'-->', answer.data[0].password);
  return valid;
  
}

// async function postPost(userId, image, text){
//   const answer = await userModel.postPost(image);
//   console.log('aaaaaaaaaaaaaaa', text, userId );
//   console.log('vvvvvvvvvvvv', answer) ;
//   return answer;
// }




// -----[ protége les routes et vérifie que l'utilisateur est authentifié avant d'autoriser l'envoi des requêtes. ]------------------------------------------------------------------------------------
module.exports = async (req, res, next) => {

  try {    
    const token        = req.headers.authorization.split(' ')[0];
    console.log( '///////////////////', token)
    if(!token) return res.status(401).send('Accès refusé !');
    const decodedToken = jwt.verify(token, process.env.JWT_KEY);
console.log('##############', decodedToken);

    if (!decodedToken) return res.status(401).send('Token invalid !');  
    const userId       = decodedToken.userId;
      
   console.log('nnnnnnnnnnn', userId, decodedToken.userId);
  
// ===========================================


// const post =  req.body.image || req.body.text === undefined ?  checkById(userId, answerId) : await postPost(userId, req.body.image, req.body.text);

const postImage =  decodedToken.userId === userId 
console.log('zzzzzzzzz', postImage);
      if (decodedToken.userId !== userId) return false
// if (!postImage) return res.status(400).send('post refusé !');
   




// =============================================s



    const result = req.body.password === undefined ? checkById(userId, answerId) : await checkByPassword(userId, req.body.email, req.body.password);
      console.log('+++++++++++++++++++', result, req.body.password);

    if (!result) return res.status(401).send('Accès refusé !');

    console.log( 'acces refusé, mot de passe incorrect ');


    // ================================================/


    

    if (!result) return res.status(401).send('Accès refusé !');

    
    next();
  } catch {
    res.status(401).json({error: Error || 'Invalid request!'})  
  } 
};



