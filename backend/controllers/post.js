const fs = require('fs'); //(file system) donne accès aux fonctions qui nous permettent de modifier le système de fichiers
const PostModel = require('../models/Post');

// -----[ création des post]-----------------------------------------------------------
exports.createPost = (req, res) => {
    const postObject = JSON.parse(req.body.post);
    delete postObject._id;       // Supprime l'id généré automatiquement
    try{
      const post = new PostModel({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      });
      console.log(postObject)
      post.save()   // Enregistre l'post' dans la base de données
      .then(() => res.status(201).json({message: 'Article enregistrées !'}))
      .catch(error => {
        res.status(400).json({ error })
      });

    }
    catch(error){
      console.log("createPost : new PostModel Failed", error);
    }
};

// -----[ trouver toutes les Post  ]-------------------------------------------------------------
exports.getAllPost = (req, res) => {
  PostModel.find()
      .then(PostModel => res.status(200).json(PostModel))
      .catch(error => {
        // console.log("\n\n\nerror", error);
        res.status(400).json({ error })
      });
     
};

// -----[ trouver un Article ]------------------------------------------------------------------------
exports.getOneArticle = (req, res) => {
  PostModel.findOne({ _id: req.params.id })
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({
      error
    }));

};

// -----[modifier un post]----------------------------------------------------------------------------
exports.modifyPost = (req, res) => {
  const postObject = req.file ? {
    ...JSON.parse(req.body.post),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

   } : { ...req.body };
   PostModel.findOne({ _id: req.params.id })
    .then(post => {
      if (req.file) {
        const filename = post.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
  PostModel.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: ' mise a jour post !'}))
      .catch(error => res.status(400).json({ error }));   
  });
} else {
  PostModel.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: " Article modifié !" }))
    .catch(error => res.status(400).json({ error }));
}
})
.catch(error => res.status(500).json({ error }));
};

// -----[effacer un post]------------------------------------------------------------------------------
exports.deletePost = (req, res) => {
    PostModel.findOne({ _id: req.params.id})
    .then(post => {
      const filename = post.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () =>{            //assure que le fichier image correspondant est également supprimé.
        PostModel.deleteOne({_id: req.params.id })
        .then(() => res.status(200).json({ message: 'Article supprimée !'}))
        .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => error.status(500).json({
      error
    }));

};
