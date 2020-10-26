const express = require('express');
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer');
const router = express.Router();


const postCtrl = require('../controllers/post');

exports.router = (function() {
    var router = express.Router();
    console.log('yo');

router.post('/', postCtrl.createPost);   
router.get('/', auth, postCtrl.getAllPost);   
router.get('/:id', auth, postCtrl.getOneArticle);  
router.put('/:id', auth, multer, postCtrl.modifyPost);   
router.delete('/auth/post/:id', postCtrl.deletePost);   


return router;
});


module.exports = router