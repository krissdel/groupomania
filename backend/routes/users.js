const express = require ('express');
const usersCtrl = require('../controllers/users');
const auth = require('../middleware/auth');
const router = express.Router();
const multer = require ('../middleware/multer');


router.post('/sign_up', usersCtrl.signup); // crée nouvel utilisateur
// router.post('/login', auth, usersCtrl.login);  //  connect utilisateur
// router.post('/logout', auth, usersCtrl.logout); // déconnect utilisateur
// router.put('/:id', auth, multer, usersCtrl.modifyUsers); // modifie utilisateur
// router.delete('/:id', auth, usersCtrl.deleteUsers); //supprime l'utilisateur


module.exports = router;