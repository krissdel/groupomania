const express = require ('express');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require ('../middleware/multer');

console.log("-----");
router.post('/sign_up', userCtrl.signup); // crée nouvel utilisateur

router.post('/login', userCtrl.login);  //  connect utilisateur
router.post('/logout', userCtrl.logout); // déconnect utilisateur
router.delete('/:id', userCtrl.deleteUser); //supprime l'utilisateur
console.log("1----");



module.exports = router;