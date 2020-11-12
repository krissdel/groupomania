const express = require('express');
const auth = require('../middleware/auth');
const multer = require ('../middleware/multer');
const router = express.Router();


const postCtrl = require('../controllers/post');

// exports.router = (function() {
//     var router = express.Router();
    console.log('yep');

router.post('/', postCtrl.createPost);   
router.get('/', postCtrl.getAllPosts);  
router.get('/:id', postCtrl.getAllUserPosts); 
// router.get('/:id', postCtrl.getOnePost);  
router.put('/:id', auth, multer, postCtrl.modifyPost);   
router.delete('/auth/post/:id', postCtrl.deletePost);   


// return router;
// });


module.exports = router