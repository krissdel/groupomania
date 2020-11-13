const db = require("./database");


exports.createPost = async function(data) {
    const sql = "INSERT INTO `post` (`text`, `image`) VALUES (?, ?)";
    const createPost = [
      data.text,
      data.image,
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
    const sql = "SELECT from `post` WHERE  `text`, `image` = data.text, data.image";
    const getAllUserPosts = [
      data
    ];
    const answer = await db.request(sql, getAllUserPosts);
    console.log("getAllUserPosts", answer);
        console.log('voiçi tous vos posts');

    return answer;
  }
// ----------------------------------------------------


exports.deletePost = async function(data) {
  const sql = "DELETE FROM `post` WHERE `text`.`id`, `image`.`id` = ?, ?";
  
  const deletePost = [
    data.text,
    data.image,
  ];
  
  const answer = await db.request(sql, deletePost);
  console.log("deletePost", answer);
      console.log('post supprimé');

  return answer;
}

 