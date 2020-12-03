const express = require('express');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const router = express.Router();


const postCtrl = require('../controllers/post');

console.log('yep');

router.post('/',auth, multer, postCtrl.createPost);
router.get('/', postCtrl.getAllPosts);
router.get('/post/:id', postCtrl.getOnePost);
router.get('/:id',  postCtrl.getAllUserPosts);
router.put('/:id',auth, multer,postCtrl.modifyPost); 
router.delete('/auth/post/:id', postCtrl.deletePost);



module.exports = router