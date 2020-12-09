/* global imagePath */

const post = require('../models/post');

// -----[ création des posts]-----------------------------------------------------------
exports.createPost = async (req, res) => {
 
  try {
    const answer = await post.createPost({
      id: req.body.id,
      idParent: req.body.idParent,
      image: req.body.image,
      text: req.body.text,
    });
    if (answer.succeed) {
      return res.status(201).json({
        "refs": req.body.idParent,
      });
    };
  } catch (error) {
    console.log("createPost Failed", error);
  }
};

// -----[ trouver toutes les Post  ]-------------------------------------------------------------
exports.getAllPosts = async (req, res) => {
  try {
    const answer = await post.getAllPosts(req.params);
    if (answer.succeed) {
      for( let i=0, size = answer.data.length; i<size; i++){
        const qty = await post.getCommentsQty(answer.data[i].id);
        answer.data[i].commentsQty=qty.data[0]["COUNT(id)"];
      }
      res.status(201).json({ data: answer.data });
    };
  } catch (error) {
    console.log("getAllPosts Failed", error);
  }
};

// -----[ trouver les posts d'un seul user  ]------------------------------------------------------------------------
exports.getAllUserPosts = async (req, res) => {
  try {

    const answer = await post.getAllUserPosts(req.params.id);
    if (answer.succeed) {
      res.status(201).json({ data: answer.data });
    };

  } catch (error) {
    console.log("getAllUserPosts Failed", error);
  }
};

// -----[modifier un post]----------------------------------------------------------------------------

exports.modifyPost = async (req, res) => {
  try {
    const answer = await post.modifyPost(req.body);
    if (answer.succeed) {
      res.status(201).json({ message: "vôtre post a été modifié !" });
    };
  } catch (error) {
    console.log("modifyPost Failed", error);
  }
};

// -----[effacer un post]------------------------------------------------------------------------------

exports.deletePost = async (req, res) => {
  try {
    const answer = await post.deletePost(req.params.id);
    if (answer.succeed) {
      res.status(200).json({ message: "post supprimée !" });
    };
  } catch (error) {
    console.log("deletePost Failed", error);
  }
};

// -----[trouver un seul post]-------------------------------------------------------------------------

exports.getOnePost = async (req, res) => {
  try {
    const answer = await post.getOnePost(req.params.id);
    if (answer.succeed) {
     res.status(202).json({ data: answer.data });
    };
  } catch (error) {
    console.log("getOnePost Failed", error);
  }
};

exports.getCommentsPosts = async (req, res) => {

  try {
    const answer = await post.getCommentsPosts(req.params.refs);
    if (answer.succeed) {
      res.status(201).json({ data: answer.data });
    };
  } catch (error) {
    console.log("getCommentsPosts Failed", error);
  }
};
