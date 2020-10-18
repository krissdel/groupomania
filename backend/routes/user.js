const express = require ('express');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require ('../middleware/multer');

// console.log("-----");
router.post('/sign_up', userCtrl.signup); // crée nouvel utilisateur
router.post('/login', auth, userCtrl.login);  //  connect utilisateur
router.post('/logout', auth, userCtrl.logout); // déconnect utilisateur
router.put('/:id', auth, multer, userCtrl.modifyUser); // modifie utilisateur
router.delete('/:id', auth, userCtrl.deleteUser); //supprime l'utilisateur
// console.log("1----");


module.exports = router;