/* global imagePath */

const fs = require('fs'); //(file system) donne accès aux fonctions qui nous permettent de modifier le système de fichiers
const post = require('../models/post');

// -----[ création des post]-----------------------------------------------------------
exports.createPost = async (req, res) => {
  console.log('55555555555444444444444444');
  console.log(req.body)

  try {

    const answer = await post.createPost({
      // image: `${req.protocol}://${req.get('host')}/${req.body.image}`,
      id: req.body.id,
      idParent: req.body.idParent,
      image: req.body.image,
      text: req.body.text,
      // date_creation: 
    });console.log("iiiiiiiiiiii", req.protocol);

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
  try {
      // console.log('ooooooooooooppppp', req);
    const answer = await post.getAllPosts(req.params);
    
    
    if (answer.succeed) {
      console.log("!!!!!!!!!!!", answer);
      console.log("controller Get allPosts Fin--ok---------------------------\n\n\n\n", answer);
      // for (let i = answer.data.length - 1; i >= 0; i--) {
      //   if (answer.data[i].image === null) continue;
      //   answer.data[i].image = `..assets/upload/${answer.data[i].image}`;
      // }
      // console.log("^^^^^^^^^^^^", answer.data[i].image);
      res.status(201).json({ data: answer.data });

    };

  } catch (error) {
    console.log("getAllPosts Failed", error);
  }
};

// -----[ trouver les post d'un seul user  ]------------------------------------------------------------------------
exports.getAllUserPosts = async (req, res) => {

  

  try {
    console.log("§§§§§§§§§§§§", req.params);
    const answer = await post.getAllUserPosts(req.params.id);
    if (answer.succeed) {
      console.log("controller getAllUserPosts Fin--ok---------------------------")
      res.status(201).json({ data: answer.data });
    };

  } catch (error) {
    console.log("getAllUserPosts Failed", error);
  }
};




// -----[modifier un post]----------------------------------------------------------------------------
exports.modifyPost = async (req, res) => {
  try {
    console.log(req.body);
    const answer = await post.modifyPost(req.body);
    if (answer.succeed) {
      console.log("controller modifyPost Fin--ok---------------------------")
      res.status(201).json({ message: "vôtre post a été modifié !" });
    };
  } catch (error) {
    console.log("modifyPost Failed", error);
  }
};

// -----[effacer un post]------------------------------------------------------------------------------

exports.deletePost = async (req, res) => {
  try {
    console.log(req.params);
    const answer = await post.deletePost(req.params.id);
    if (answer.succeed) {
      console.log("controller deletePost Fin--ok---------------------------")
      res.status(200).json({ message: "post supprimée !" });
    };
  } catch (error) {
    console.log("deletePost Failed", error);
  }
};

// ------------------------------------

exports.getOnePost = async (req, res) => {
  try {
      console.log('ooooooooooooreq.params.id', req.params.id);
    const answer = await post.getOnePost(req.params.id);
    
    
    if (answer.succeed) {
      console.log("!!!!!!!!!!!", answer);
      console.log("controller Get onePost Fin--ok---------------------------\n\n\n\n", answer);

      res.status(202).json({ data: answer.data});     
    };
    console.log("....." ,answer.data);
  } catch (error) {
    console.log("getOnePost Failed", error);
  }
};
