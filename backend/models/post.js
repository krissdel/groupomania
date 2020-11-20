const db = require("./database");


exports.createPost = async function(data) {
    const sql = "INSERT INTO `post` (`text`, `image`, `refs`, `user_id` ) VALUES (?, ?, ?, ?)";
    const createPost = [
      data.text,
      data.image,
      data.idParent,
      data.id,
    ];
    
    const answer = await db.request(sql, createPost);
    console.log("creatPost", answer);
        console.log('post crée');

    return answer;
  };
  
// -------------------------------------------------------

  exports.getAllPosts =  async function(data){
    const sql = "SELECT * from post ";
    const getAllPosts = 
    [
      data
    ];
    const answer = await db.request(sql, getAllPosts);
    console.log("getAllPosts", answer);
        console.log('voiçi tous les posts');

    return answer;
  }
  
  // ------------------------------------------------
  
  exports.getAllUserPosts =  async function(data){
    const sql = "SELECT * FROM `post` WHERE `user_id` = 2 ";
    const getAllUserPosts = [
      data
    ];
    const answer = await db.request(sql, getAllUserPosts);
    console.log("getAllUserPosts", answer);
        console.log('voiçi tous vos posts');

    return answer;
  }
// ----------------------------------------------------












exports.deletePost = async function(id) {
  const sql = "DELETE FROM `post` WHERE `post`.`id` = ? ";
  const deletePost = [
   id
  ];
  const answer = await db.request(sql, deletePost);
  console.log("deletePost", answer);
      console.log('post supprimé');
  return answer;
}

 
exports.modifyPost = async function(id) {
  const sql = "UPDATE `post` SET `text`, `image`= ?, ? Where ";
  const modifyPost = [
   id
  ];
  const answer = await db.request(sql, modifyPost);
  console.log("modifyPost", answer);
      console.log('post supprimé');
  return answer;
}



// exports.getOnePost =  async function(data){
//   const sql = "SELECT * from `post` WHERE `post`.`id` = ? ";
//   const getOnePost = 
//   [
//     data
//   ];
//   const answer = await db.request(sql, getOnePost);
//   console.log("getOnePost", answer);
//       console.log('voiçi tous les posts');

//   return answer;
// }