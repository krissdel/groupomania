/* global imagePath */

const fs = require('fs'); //(file system) donne accès aux fonctions qui nous permettent de modifier le système de fichiers
const post = require('../models/post');

// -----[ création des post]-----------------------------------------------------------
exports.createPost = async (req, res) => {
  console.log('55555555555444444444444444');
  console.log(req.body)

  try {

    const answer = await post.createPost({
      // image: `${req.protocol}://${req.get('host')}/${this.selectedFile}`,
      id: req.body.id,
      idParent: req.body.idParent, 
      image: req.body.image,
      text: req.body.text,
    });

    if (answer.succeed) {
      console.log("controllerPost Fin--ok---------------------------")
      res.status(201).json({ message: "Utilisateur créé !" });
    };

  } catch (error) {
    console.log("createPost Failed", error);
  }
};

// -----[ trouver toutes les Post  ]-------------------------------------------------------------
exports.getAllPosts = async (req, res) => {

  console.log("!!!!!!!!!!!");
  try {

    const answer = await post.getAllPosts();
    if (answer.succeed) {
      console.log("controller Get allPosts Fin--ok---------------------------\n\n\n\n", answer);
      for (let i = answer.data.length-1; i >= 0; i--) {
        if (answer.data[i].image === null) continue;
        answer.data[i].image = "/" + imagePath + "/" + answer.data[i].image;
      }
      res.status(201).json({ data: answer.data });

    };

  } catch (error) {
    console.log("getAllPosts Failed", error);
  }
};

// -----[ trouver les post d'un seul user  ]------------------------------------------------------------------------
exports.getAllUserPosts = async (req, res) => {

  console.log("§§§§§§§§§§§§");

  try {

    const answer = await post.getAllUserPosts();
    if (answer.succeed) {

      for (let i = 0, size = answer.data.length; i < size; i++) {
        if (answer.data[i].image === null) continue;
        answer.data[i].image = "/" + imagePath + "/" + answer.data[i].image;
      }
      console.log("controller getAllUserPosts Fin--ok---------------------------")
      res.status(201).json({ data: answer.data });
    };

  } catch (error) {
    console.log("getAllUserPosts Failed", error);
  }
};




// -----[modifier un post]----------------------------------------------------------------------------
// exports.modifyPost = (req, res) => {
//   const postObject = req.file ? {
//     ...JSON.parse(req.body.post),
//     imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

//   } : { ...req.body };
//   PostModel.findOne({ _id: req.params.id })
//     .then(post => {
//       if (req.file) {
//         const filename = post.imageUrl.split("/images/")[1];
//         fs.unlink(`images/${filename}`, () => {
//           PostModel.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
//             .then(() => res.status(200).json({ message: ' mise a jour post !' }))
//             .catch(error => res.status(400).json({ error }));
//         });
//       } else {
//         PostModel.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
//           .then(() => res.status(200).json({ message: " Article modifié !" }))
//           .catch(error => res.status(400).json({ error }));
//       }
//     })
//     .catch(error => res.status(500).json({ error }));
// };

// -----[effacer un post]------------------------------------------------------------------------------

exports.deletePost = async (req, res) => {

  try {
    console.log(req.params);
    const answer = await post.deletePost(req.params.id);
    if (answer.succeed) {
      for (let i = 1, size = answer.data.length; i > size; i--) {
        if (answer.data[i].image === null) continue;
        answer.data[i].image = "/" + imagePath + "/" + answer.data[i].image;
      }

      console.log("controller deletePost Fin--ok---------------------------")
      res.status(200).json({ message: "post supprimée !" });
    };
  } catch (error) {
    console.log("deletePost Failed", error);
  }
};
