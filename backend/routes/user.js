const express = require ('express');
const userCtrl = require('../controllers/users');

const router = express.Router();

router.post('/signup', usersCtrl.signup); // crée nouvel utilisateur
router.post('/login', usersCtrl.login);  //  connect utilisateur

module.exports = router;