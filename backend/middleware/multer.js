/* global imagePath */
const multer = require('multer'); // [gére les fichiers entrants dans les requêtes HTTP]
                                  //[téléchargement de photos]
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};
console.log("multer");
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, imagePath);
  },
  filename: (req, file, callback) => {
    console.log("multer",  filename);
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
  
});

module.exports = multer({storage: storage}).single(imagePath);