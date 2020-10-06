const express = require('express');
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer');
const router = express.Router();


const articlesCtrl = require('../controllers/articles');

router.post('/', auth, multer, articlesCtrl.createArticles);   
// router.get('/', auth, articlesCtrl.getAllArticles);   
router.get('/:id', auth, articlesCtrl.getOneArticle);  
router.put('/:id', auth, multer, articlesCtrl.modifyArticles);   
router.delete('/articles/:id', auth, articlesCtrl.deleteArticles);   
