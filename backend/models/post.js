const db = require("./database");


exports.createPost = async function(data) {
    const sql = "INSERT INTO `post` (`text`, `image`, `refs`, `user_id`, `date_creation` ) VALUES (?, ?, ?, ?, NOW())";
    const createPost = [
      data.text,
      data.image,
      data.idParent,
      data.id,
    ];
    const answer = await db.request(sql, createPost);
    return answer;
  };
  
// -------------------------------------------------------

  exports.getAllPosts =  async function(data){
    const sql = "SELECT * from `post` WHERE `refs` = 0 ";    
    const getAllPosts = 
    [
      data
    ];
    const answer = await db.request(sql, getAllPosts);
    return answer;
  }
  
  // ------------------------------------------------
  
  exports.getAllUserPosts =  async function(data){
    const sql = "SELECT * FROM `post` WHERE `user_id` = ? ";    
    const getAllUserPosts = [
      data
    ];
    const answer = await db.request(sql, getAllUserPosts);
    return answer;
  }
// ----------------------------------------------------




exports.deletePost = async function(id) {
  const sql = "DELETE FROM `post` WHERE `post`.`id` = ? ";
  const deletePost = [
   id
  ];
  const answer = await db.request(sql, deletePost);
  return answer;
}




exports.getOnePost =  async function(id){
  const sql = "SELECT * from `post` WHERE  `post`.`id` = ? ";
  const getOnePost = 
  [
    id
  ];
  const answer = await db.request(sql, getOnePost);
  return answer;
}


exports.modifyPost = async function(data) {
  const sql = "UPDATE `post` SET `text`= ?, `image`= ? WHERE `post`.`id` = ?";
    
  const modifyPost = [
   data.text,
   data.image,
   data.id_post
  ];
  const answer = await db.request(sql, modifyPost);
  return answer;
}

exports.getCommentsPosts = async function(data) {
  const sql = "SELECT * from `post` WHERE  `refs` = ? ";  
  const getCommentsPosts = [
   data
  ];
  const answer = await db.request(sql, getCommentsPosts);
  return answer;
}

exports.getCommentsQty = async function(idPost){
  const sql = "SELECT COUNT(id) FROM `post` WHERE `refs` = ? ";
  const answer = await db.request(sql, [idPost]);
  return answer;
}