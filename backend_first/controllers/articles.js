const fs = require('fs'); //(file system) donne accès aux fonctions qui nous permettent de modifier le système de fichiers
const ArticlesModel = require('../models/Articles');

// -----[ création des articles]-----------------------------------------------------------
exports.createArticles = (req, res) => {
    const articlesObject = JSON.parse(req.body.articles);
    delete articlesObject._id;       // Supprime l'id généré automatiquement
    try{
      const articles = new ArticlesModel({
        ...articlesObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
      });
      console.log(articlesObject)
      articles.save()   // Enregistre l'article' dans la base de données
      .then(() => res.status(201).json({message: 'Article enregistrées !'}))
      .catch(error => {
        res.status(400).json({ error })
      });

    }
    catch(error){
      console.log("createArticles : new ArticlesModel Failed", error);
    }
};

// -----[ trouver toutes les Articles  ]-------------------------------------------------------------
exports.getAllArticles = (req, res) => {
  ArticlesModel.find()
      .then(ArticlesModel => res.status(200).json(ArticlesModel))
      .catch(error => {
        // console.log("\n\n\nerror", error);
        res.status(400).json({ error })
      });
     
};

// -----[ trouver un Article ]------------------------------------------------------------------------
exports.getOneArticle = (req, res) => {
  ArticlesModel.findOne({ _id: req.params.id })
    .then(articles => res.status(200).json(articles))
    .catch(error => res.status(404).json({
      error
    }));

};

// -----[modifier un article]----------------------------------------------------------------------------
exports.modifyArticles = (req, res) => {
  const articlesObject = req.file ? {
    ...JSON.parse(req.body.articles),
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

   } : { ...req.body };
   ArticlesModel.findOne({ _id: req.params.id })
    .then(articles => {
      if (req.file) {
        const filename = articles.imageUrl.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
  ArticlesModel.updateOne({ _id: req.params.id }, { ...articlesObject, _id: req.params.id })
      .then(() => res.status(200).json({ message: ' mise a jour article !'}))
      .catch(error => res.status(400).json({ error }));   
  });
} else {
  ArticlesModel.updateOne({ _id: req.params.id }, { ...articlesObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: " Article modifié !" }))
    .catch(error => res.status(400).json({ error }));
}
})
.catch(error => res.status(500).json({ error }));
};

// -----[effacer un article]------------------------------------------------------------------------------
exports.deleteArticles = (req, res) => {
    ArticlesModel.findOne({ _id: req.params.id})
    .then(articles => {
      const filename = articles.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () =>{            //assure que le fichier image correspondant est également supprimé.
        ArticlesModel.deleteOne({_id: req.params.id })
        .then(() => res.status(200).json({ message: 'Article supprimée !'}))
        .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => error.status(500).json({
      error
    }));

};
