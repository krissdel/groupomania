const express = require ('express');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/sign_up',   userCtrl.signup); // crée nouvel utilisateur
router.post('/login', auth,  userCtrl.login);  //  connect utilisateur
router.delete('/:id',  userCtrl.deleteUser); //supprime l'utilisateur




module.exports = router;