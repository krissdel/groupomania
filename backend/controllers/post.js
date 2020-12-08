/* global imagePath */

const post = require('../models/post');

// -----[ création des posts]-----------------------------------------------------------
exports.createPost = async (req, res) => {
  console.log('55555555555444444444444444');
  console.log(req.body)
  try {
    const answer = await post.createPost({
      id: req.body.id,
      idParent: req.body.idParent,
      image: req.body.image,
      text: req.body.text,
    });
    if (answer.succeed) {
      console.log("controllerPost Fin--ok---------------------------")
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
        console.log(answer.data[i].id,"_>", qty.data[0], answer.data[i].commentsQty)
      }
      
      console.log("!!!!!!end!!!!!");
      res.status(201).json({ data: answer.data });
    };
  } catch (error) {
    console.log("getAllPosts Failed", error);
  }
};

// -----[ trouver les posts d'un seul user  ]------------------------------------------------------------------------
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
    console.log("req.body:", req.body);
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

// -----[trouver un seul post]-------------------------------------------------------------------------

exports.getOnePost = async (req, res) => {
  try {
    console.log('ooooooooooooreq.params.id', req.params.id);
    const answer = await post.getOnePost(req.params.id);
    if (answer.succeed) {
      console.log("!!!!!!!!!!!", answer);
      console.log("controller Get onePost Fin--ok---------------------------\n\n\n\n", answer);
      res.status(202).json({ data: answer.data });
    };
    console.log(".....", answer.data);
  } catch (error) {
    console.log("getOnePost Failed", error);
  }
};

exports.getCommentsPosts = async (req, res) => {

  try {
    console.log("CCCCCCCCCCCC", req.params);
    const answer = await post.getCommentsPosts(req.params.refs);
    if (answer.succeed) {
      console.log("controller getCommentsPosts Fin--ok---------------------------")
      res.status(201).json({ data: answer.data });
    };
  } catch (error) {
    console.log("getCommentsPosts Failed", error);
  }
};
